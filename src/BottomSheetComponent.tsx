import React, { ReactNode, useCallback, useMemo, useRef, useEffect } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetScrollView,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export interface BottomSheetProps {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    height?: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
    scrollable?: boolean;
    title?: string;
    isDark?: boolean;
    theme?: {
        backgroundLight?: string;
        backgroundDark?: string;
        textLight?: string;
        textDark?: string;
        handleLight?: string;
        handleDark?: string;
    };
}

export const BottomSheetComponent: React.FC<BottomSheetProps> = ({
    children,
    visible,
    onClose,
    height = 'medium',
    scrollable = false,
    title,
    isDark = false,
    theme = {},
}) => {
    const sheetRef = useRef<BottomSheet>(null);

    const heightMap = {
        small: ['30%'],
        medium: ['50%'],
        large: ['50%', '75%'],
        xlarge: ['60%', '90%'],
        full: ['50%', '95%'],
    };

    const snapPoints = useMemo(() => heightMap[height], [height]);

    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                pressBehavior="close"
            />
        ),
        []
    );

    useEffect(() => {
        visible ? sheetRef.current?.expand() : sheetRef.current?.close();
    }, [visible]);

    const ContentWrapper = scrollable ? BottomSheetScrollView : BottomSheetView;

    return (
        <Modal transparent visible={visible} onRequestClose={onClose}>
            <GestureHandlerRootView style={styles.container}>
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose
                    backdropComponent={renderBackdrop}
                    onChange={(i) => i === -1 && onClose()}
                    backgroundStyle={{
                        backgroundColor: isDark
                            ? theme.backgroundDark ?? '#1c1c1e'
                            : theme.backgroundLight ?? '#fff',
                    }}
                    handleIndicatorStyle={{
                        backgroundColor: isDark
                            ? theme.handleDark ?? '#555'
                            : theme.handleLight ?? '#ccc',
                    }}
                >
                    <ContentWrapper style={styles.content}>
                        {title && (
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 18,
                                    marginBottom: 16,
                                    color: isDark
                                        ? theme.textDark ?? '#fff'
                                        : theme.textLight ?? '#000',
                                }}
                            >
                                {title}
                            </Text>
                        )}
                        {children}
                    </ContentWrapper>
                </BottomSheet>
            </GestureHandlerRootView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: 20, paddingBottom: 40 },
});
