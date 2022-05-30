import * as React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import searchIcon from "../assets/icons/search.png";
import styles from "./styles";

const Search = () => {
  const [text, onChangeText] = React.useState("");

  function search() { }

  return (
    <View style={[styles.searchbar, styles.flex_row, styles.margins]}>
      <TextInput
        style={styles.searchinput}
        onChangeText={onChangeText}
        placeholder="Looking for something? type here..."
        placeholderTextColor='gray'
        value={text}
      />
      <TouchableOpacity>
        <Image source={searchIcon} style={styles.searchicon} />
      </TouchableOpacity>
    </View>
  )
}

export default Search