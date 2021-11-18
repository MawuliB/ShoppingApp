import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Note from '../components/DisplayCart';
import { useNotes } from '../components/Provider'


export default function Cart() {


 /*   const reverseData = data => {
        return data.sort((a, b) => {
          const aInt = parseInt(a.time);
          const bInt = parseInt(b.time);
          if (aInt < bInt) return 1;
          if (aInt == bInt) return 0;
          if (aInt > bInt) return -1;
        });
      };*/

      const { notes, setNotes, findNotes } = useState();
    //const reverseNotes = reverseData(notes);

    return (
        <FlatList
              data={notes}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <Note item={item} />
              )}
            />
    )
}

const styles = StyleSheet.create({})
