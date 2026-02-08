# bottomsheetcomponent

A beautiful and customizable bottom sheet component for React Native, built on top of [@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet).

## Features

✨ **Easy to use** - Simple API with sensible defaults  
🎨 **Customizable** - Theme support with light/dark mode  
📏 **Flexible heights** - Predefined sizes from small to full screen  
📜 **Scrollable content** - Built-in scroll support for long content  
⚡ **Performant** - Powered by Reanimated 2 & Gesture Handler  

## Installation

```bash
npm install bottomsheetcomponent
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install @gorhom/bottom-sheet react-native-gesture-handler react-native-reanimated
```

### Setup

Configure React Native Reanimated in your `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // Add this line
};
```

For iOS, run:
```bash
cd ios && pod install
```

## Usage

### Basic Example

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { BottomSheetComponent } from 'bottomsheetcomponent';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Bottom Sheet" onPress={() => setVisible(true)} />

      <BottomSheetComponent
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Text>Hello from Bottom Sheet!</Text>
      </BottomSheetComponent>
    </View>
  );
};

export default App;
```

### With Title

```tsx
<BottomSheetComponent
  visible={visible}
  onClose={() => setVisible(false)}
  title="Select an Option"
>
  <Text>Your content here</Text>
</BottomSheetComponent>
```

### Custom Height

```tsx
<BottomSheetComponent
  visible={visible}
  onClose={() => setVisible(false)}
  height="large" // 'small' | 'medium' | 'large' | 'xlarge' | 'full'
>
  <Text>Larger bottom sheet</Text>
</BottomSheetComponent>
```

### Scrollable Content

```tsx
<BottomSheetComponent
  visible={visible}
  onClose={() => setVisible(false)}
  scrollable={true}
>
  {/* Long list of items */}
  {items.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</BottomSheetComponent>
```

### Dark Mode

```tsx
<BottomSheetComponent
  visible={visible}
  onClose={() => setVisible(false)}
  isDark={true}
>
  <Text style={{ color: '#fff' }}>Dark mode content</Text>
</BottomSheetComponent>
```

### Custom Theme

```tsx
<BottomSheetComponent
  visible={visible}
  onClose={() => setVisible(false)}
  isDark={false}
  theme={{
    backgroundLight: '#f5f5f5',
    backgroundDark: '#2c2c2e',
    textLight: '#333',
    textDark: '#f0f0f0',
    handleLight: '#999',
    handleDark: '#666',
  }}
>
  <Text>Themed content</Text>
</BottomSheetComponent>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Content to display inside the bottom sheet |
| `visible` | `boolean` | **Required** | Controls visibility of the bottom sheet |
| `onClose` | `() => void` | **Required** | Callback when bottom sheet is closed |
| `height` | `'small' \| 'medium' \| 'large' \| 'xlarge' \| 'full'` | `'medium'` | Preset height of the bottom sheet |
| `scrollable` | `boolean` | `false` | Enable scrolling for content |
| `title` | `string` | `undefined` | Optional title displayed at the top |
| `isDark` | `boolean` | `false` | Enable dark mode styling |
| `theme` | `object` | `{}` | Custom theme colors (see below) |

### Height Options

- **small**: 30% of screen height
- **medium**: 50% of screen height (single snap point)
- **large**: 50% → 75% (expandable)
- **xlarge**: 60% → 90% (expandable)
- **full**: 50% → 95% (expandable)

### Theme Object

```typescript
{
  backgroundLight?: string;  // Background color in light mode
  backgroundDark?: string;   // Background color in dark mode
  textLight?: string;        // Text color in light mode
  textDark?: string;         // Text color in dark mode
  handleLight?: string;      // Handle indicator color in light mode
  handleDark?: string;       // Handle indicator color in dark mode
}
```

## Complete Example

```tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BottomSheetComponent } from 'bottomsheetcomponent';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Options" onPress={() => setVisible(true)} />

      <BottomSheetComponent
        visible={visible}
        onClose={() => setVisible(false)}
        title="Choose an Action"
        height="large"
        scrollable={true}
        isDark={false}
      >
        <View style={styles.option}>
          <Text style={styles.optionText}>Option 1</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Option 2</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Option 3</Text>
        </View>
      </BottomSheetComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
});

export default App;
```

## Requirements

- React Native >= 0.73.0
- React >= 18.2.0
- @gorhom/bottom-sheet >= 4.6.4
- react-native-gesture-handler >= 2.14.0
- react-native-reanimated >= 3.0.0

## License

ISC

## Credits

Built with [@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet)
