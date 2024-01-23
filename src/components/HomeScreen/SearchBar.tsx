import * as React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dispatch, SetStateAction} from 'react';

interface ISearchProps {
  query: string;
  onQueryChange: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
}
const SearchBar = ({query, onQueryChange, onSearch}: ISearchProps) => (
  <View style={styles.backgroundStyle}>
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={false}
      placeholder={'Search'}
      style={styles.inputStyle}
      value={query}
      onChangeText={onQueryChange}
      onEndEditing={onSearch}
    />
    <AntDesign name={'search1'} onPress={onSearch} style={styles.iconStyle} />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
  },
});

export default SearchBar;
