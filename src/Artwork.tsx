import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Showcase from './Showcase';
import styles from "./styles";

const Artwork = () => {
  const [value, setValue] = React.useState('1');
  const [isFocus, setIsFocus] = React.useState(false);

  const data = [
    { label: 'Art', value: '1' },
    { label: 'Art2', value: '2' },
    { label: 'Art3', value: '3' },
  ];
  const _renderItem = item => {
    return (
      <Text style={styles.dropdown_list}>{item.label}</Text>
    );
  };
  return (
    <>
      <View style={[styles.margins, styles.flex_row]}>
        <Text style={styles.boldtext}>Choose Artwork</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && styles.dropdown_focus]}
          containerStyle={styles.dropdown_container}
          selectedTextStyle={styles.dropdown_selected}
          data={data}
          labelField="label"
          valueField="value"
          activeColor='#ffffff22'
          placeholder="Select item"
          iconColor='white'
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          renderItem={item => _renderItem(item)}
        />
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity onPress={() => setValue("4")}>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <Showcase />
    </>
  )
}

export default Artwork