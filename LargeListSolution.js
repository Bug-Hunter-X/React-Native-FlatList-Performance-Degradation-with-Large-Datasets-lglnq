The solution involves using the `windowSize` and `initialNumToRender` props of the FlatList component. By setting `windowSize` to a smaller number, only a limited number of items around the currently visible area are rendered. `initialNumToRender` controls the number of items to render initially. This drastically reduces the number of components rendered at any given time.  Additionally, using techniques like `getItemLayout` can further optimize performance by providing the FlatList with predictable item sizes.  More advanced scenarios may benefit from using a dedicated React Native virtualization library.

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={(item, index) => index.toString()}
  windowSize={10} // Render only 10 items around the visible area
  initialNumToRender={10} // Render only 10 items initially
/>
```