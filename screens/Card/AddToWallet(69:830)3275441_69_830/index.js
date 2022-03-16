import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_69_831} />
      <View style={styles.View_69_832}>
        <View style={styles.View_69_833}>
          <View style={styles.View_69_834}>
            <Text style={styles.Text_69_834}>Today</Text>
          </View>
          <View style={styles.View_69_835}>
            <View style={styles.View_69_836}>
              <View style={styles.View_I69_836_31_243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddbc/6002/aa89a6d3cd743cac4ceb3f6dcdaa1639"
                  }}
                  style={styles.ImageBackground_I69_836_31_244}
                />
                <View style={styles.View_I69_836_31_245}>
                  <View style={styles.View_I69_836_31_246}>
                    <Text style={styles.Text_I69_836_31_246}>Transaction</Text>
                  </View>
                  <View style={styles.View_I69_836_31_247}>
                    <Text style={styles.Text_I69_836_31_247}>
                      Type of transaction
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I69_836_31_251}>
                <View style={styles.View_I69_836_31_248}>
                  <Text style={styles.Text_I69_836_31_248}>-605</Text>
                </View>
                <View style={styles.View_I69_836_31_250}>
                  <Text style={styles.Text_I69_836_31_250}>.10</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_69_837}>
              <View style={styles.View_I69_837_31_243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4354/68be/16d6c1e346b66bb47d299cbcda03dd0a"
                  }}
                  style={styles.ImageBackground_I69_837_31_244}
                />
                <View style={styles.View_I69_837_31_245}>
                  <View style={styles.View_I69_837_31_246}>
                    <Text style={styles.Text_I69_837_31_246}>Transaction</Text>
                  </View>
                  <View style={styles.View_I69_837_31_247}>
                    <Text style={styles.Text_I69_837_31_247}>
                      Type of transaction
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I69_837_31_251}>
                <View style={styles.View_I69_837_31_248}>
                  <Text style={styles.Text_I69_837_31_248}>-329</Text>
                </View>
                <View style={styles.View_I69_837_31_250}>
                  <Text style={styles.Text_I69_837_31_250}>.10</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_69_838}>
              <View style={styles.View_I69_838_31_243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddbc/6002/aa89a6d3cd743cac4ceb3f6dcdaa1639"
                  }}
                  style={styles.ImageBackground_I69_838_31_244}
                />
                <View style={styles.View_I69_838_31_245}>
                  <View style={styles.View_I69_838_31_246}>
                    <Text style={styles.Text_I69_838_31_246}>Transaction</Text>
                  </View>
                  <View style={styles.View_I69_838_31_247}>
                    <Text style={styles.Text_I69_838_31_247}>
                      Type of transaction
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I69_838_31_251}>
                <View style={styles.View_I69_838_31_248}>
                  <Text style={styles.Text_I69_838_31_248}>-12</Text>
                </View>
                <View style={styles.View_I69_838_31_250}>
                  <Text style={styles.Text_I69_838_31_250}>.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_69_839}>
              <View style={styles.View_I69_839_31_243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4354/68be/16d6c1e346b66bb47d299cbcda03dd0a"
                  }}
                  style={styles.ImageBackground_I69_839_31_244}
                />
                <View style={styles.View_I69_839_31_245}>
                  <View style={styles.View_I69_839_31_246}>
                    <Text style={styles.Text_I69_839_31_246}>Transaction</Text>
                  </View>
                  <View style={styles.View_I69_839_31_247}>
                    <Text style={styles.Text_I69_839_31_247}>
                      Type of transaction
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I69_839_31_251}>
                <View style={styles.View_I69_839_31_248}>
                  <Text style={styles.Text_I69_839_31_248}>-1,000</Text>
                </View>
                <View style={styles.View_I69_839_31_250}>
                  <Text style={styles.Text_I69_839_31_250}>.10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_69_840}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aced/38ce/5da9ef4d7d526dc5bf04c2daf154b032"
          }}
          style={styles.ImageBackground_I69_840_31_451}
        />
        <View style={styles.View_I69_840_31_452}>
          <Text style={styles.Text_I69_840_31_452}>Aman Sharma </Text>
        </View>
      </View>
      <View style={styles.View_69_842}>
        <View style={styles.View_69_843}>
          <Text style={styles.Text_69_843}>Your Balance</Text>
        </View>
        <View style={styles.View_69_844}>
          <View style={styles.View_69_845}>
            <View style={styles.View_69_846}>
              <Text style={styles.Text_69_846}>$1,987</Text>
            </View>
            <View style={styles.View_69_847}>
              <Text style={styles.Text_69_847}>.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_69_849}>
        <Text style={styles.Text_69_849}>Card</Text>
      </View>
      <View style={styles.View_69_850}>
        <View style={styles.View_69_851} />
        <View style={styles.View_69_852}>
          <View style={styles.View_69_853}>
            <Text style={styles.Text_69_853}>7987</Text>
          </View>
          <View style={styles.View_69_854}>
            <Text style={styles.Text_69_854}>12/39</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c440/4dbc/4bd0cc0a3b78c2f361c2aa38521ec46c"
          }}
          style={styles.ImageBackground_69_855}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee5/f61f/2ea68b8122ca647ef428b3cdfd516a1d"
          }}
          style={styles.ImageBackground_69_856}
        />
      </View>
      <View style={styles.View_69_857}>
        <View style={styles.View_I69_857_31_364} />
        <View style={styles.View_I69_857_31_365} />
        <View style={styles.View_I69_857_31_366}>
          <View style={styles.View_I69_857_31_367}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ae/0450/3d7e69fa52473ae0348f8cea6378a933"
              }}
              style={styles.ImageBackground_I69_857_31_368}
            />
            <View style={styles.View_I69_857_31_369}>
              <Text style={styles.Text_I69_857_31_369}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I69_857_31_370}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11eb/9823/00b87c53af6f56b3c34b171805a969bb"
              }}
              style={styles.ImageBackground_I69_857_31_371}
            />
            <View style={styles.View_I69_857_31_372}>
              <Text style={styles.Text_I69_857_31_372}>Notifications</Text>
            </View>
          </View>
          <View style={styles.View_I69_857_31_373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c88/9bdd/f14a7fdb96a0d1c4e3da89521505ed24"
              }}
              style={styles.ImageBackground_I69_857_31_374}
            />
            <View style={styles.View_I69_857_31_375}>
              <Text style={styles.Text_I69_857_31_375}>Help</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0edc/9f55/181f14cd1aa13ee59914625953e59a33"
        }}
        style={styles.ImageBackground_69_858}
      />
      <View style={styles.View_112_1029}>
        <View style={styles.View_I112_1029_112_1022}>
          <Text style={styles.Text_I112_1029_112_1022}>See Card Details</Text>
        </View>
        <View style={styles.View_I112_1029_112_958}>
          <Text style={styles.Text_I112_1029_112_958}>Add to wallet</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 247, 249, 1)" },
  View_2: { height: hp("111%") },
  View_69_831: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_69_832: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_69_833: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_834: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_69_834: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_835: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_836: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_836_31_243: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_836_31_244: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_836_31_245: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_836_31_246: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_836_31_246: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_836_31_247: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I69_836_31_247: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_836_31_251: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_836_31_248: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_836_31_248: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_836_31_250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_836_31_250: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_837: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_837_31_243: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_837_31_244: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_837_31_245: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_837_31_246: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_837_31_246: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_837_31_247: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I69_837_31_247: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_837_31_251: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_837_31_248: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_837_31_248: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_837_31_250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_837_31_250: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_838: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_838_31_243: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_838_31_244: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_838_31_245: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_838_31_246: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_838_31_246: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_838_31_247: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I69_838_31_247: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_838_31_251: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_838_31_248: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_838_31_248: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_838_31_250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_838_31_250: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_839: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_839_31_243: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_839_31_244: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_839_31_245: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_839_31_246: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_839_31_246: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_839_31_247: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I69_839_31_247: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_839_31_251: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_839_31_248: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I69_839_31_248: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_839_31_250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_839_31_250: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_840: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_840_31_451: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_840_31_452: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_840_31_452: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_842: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_843: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_69_843: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_844: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_69_845: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_846: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_69_846: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_847: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_69_847: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_849: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_69_849: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_850: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26%")
  },
  View_69_851: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 249, 245, 1)"
  },
  View_69_852: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_69_853: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_69_853: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_854: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_69_854: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_69_855: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_69_856: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_69_857: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_857_31_364: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_I69_857_31_365: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 230, 230, 1)"
  },
  View_I69_857_31_366: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_857_31_367: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_857_31_368: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I69_857_31_369: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_857_31_369: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_857_31_370: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_857_31_371: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I69_857_31_372: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_857_31_372: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_857_31_373: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_857_31_374: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I69_857_31_375: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_857_31_375: {
    color: "rgba(158, 157, 157, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_69_858: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_112_1029: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I112_1029_112_1022: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I112_1029_112_1022: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I112_1029_112_958: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I112_1029_112_958: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
