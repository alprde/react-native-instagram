import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from './node_modules/res/colors';
import StoryListItem from './node_modules/components/StoryListItem';
import images from './node_modules/res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import prettyTime from './node_modules/library/utils/prettyTime';
import I18n from './node_modules/library/utils/I18n';

const PostPublishDate = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      {prettyTime(I18n.t('prettyTime.long'), post.publishedAt)}
    </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  text: {
    color: colors.textFaded2,
    fontSize: 12,
  }
});

export default PostPublishDate;