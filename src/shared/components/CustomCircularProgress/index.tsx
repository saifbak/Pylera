import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

interface CustomCircularProgressBarProps {
    percentage: number;
    borderColor?: string;
}

const CustomCircularProgressBar: React.FC<CustomCircularProgressBarProps> = ({
    percentage,
    borderColor = 'red',
}) => {
    const [fillAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fillAnimation, {
            toValue: 50,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [percentage]);

    const polarToCartesian = (angle: number) => {
        const radius = 50; // adjust the radius as needed
        const centerX = 50;
        const centerY = 50;

        const radians = ((angle - 90) * Math.PI) / 180.0;
        const x = centerX + radius * Math.cos(radians);
        const y = centerY + radius * Math.sin(radians);

        return { x, y };
    };

    const arcPath = () => {
        const startAngle = -90; // Start from the top
        const endAngle = 360 * (percentage / 100) - 90; // Calculate end angle based on percentage

        const startPoint = polarToCartesian(startAngle);
        const endPoint = polarToCartesian(endAngle);

        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        const path = `
      M ${startPoint.x} ${startPoint.y}
      A 50 50 0 ${largeArcFlag} 1 ${endPoint.x} ${endPoint.y}
    `;

        return path;
    };

    const interpolateColor = fillAnimation.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(255, 255, 255, 0.5)', borderColor],
    });

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Animated.View
                    style={[
                        styles.fill,
                        {
                            backgroundColor: interpolateColor,
                            transform: [
                                {
                                    rotate: fillAnimation.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0deg', '360deg'],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <Text style={styles.percentageText}>{`${percentage}%`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
    progressBar: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 50,
        overflow: 'hidden',
    },
    percentageText: {
        position: 'absolute',
        top: '45%',
        left: '45%',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default CustomCircularProgressBar;
