import { StyleSheet, Text, View } from "react-native";
import Swiper from 'react-native-swiper'
import { Image, Pressable } from "react-native";
import { Link } from "expo-router";
import Button from "@/components/Button";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#646982',
    textAlign: 'center'
  },
  slide: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    backgroundColor: '#fff',
    paddingTop: 200
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#FF7622',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  image: {
    height: 292,
    width: 260
  },
})

export default function Index() {
  return (
    <Swiper loop={false} showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/undraw_online_groceries.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>All your favorites</Text>
          <Text style={styles.description}>
            Get all your loved foods in one once place,
            you just place the orer we do the rest
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Button>
            <Link href="/">
              Next
            </Link>
          </Button>
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: 'center' }}>
              Skip
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/undraw_Cooking.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Order from choosen chef</Text>
          <Text style={styles.description}>
            Get all your loved foods in one once place,
            you just place the orer we do the rest
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Button>
            <Link href="/">
              Next
            </Link>
          </Button>
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: 'center' }}>
              Skip
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/undraw_On_the_way.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Free delivery offers</Text>
          <Text style={styles.description}>
            Get all your loved foods in one once place,
            you just place the orer we do the rest
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Button>
            <Link href="/">
              Next
            </Link>
          </Button>
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: 'center' }}>
              Skip
            </Text>
          </View>
        </View>
      </View>
    </Swiper>
  );
}
