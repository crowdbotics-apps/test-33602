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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a74b/c9f4/22efa42644421c787da464d1eae3d320"
        }}
        style={styles.ImageBackground_249_9392}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f8e/25f7/3b33d2d469ee998e0a4e2fed39391dad"
        }}
        style={styles.ImageBackground_249_9393}
      />
      <View style={styles.View_249_9394}>
        <View style={styles.View_249_9395}>
          <View style={styles.View_249_9396} />
        </View>
        <View style={styles.View_249_9397}>
          <View style={styles.View_249_9398}>
            <View style={styles.View_249_9399} />
          </View>
        </View>
        <View style={styles.View_249_9400} />
        <View style={styles.View_249_9401}>
          <View style={styles.View_249_9402}>
            <View style={styles.View_249_9403}>
              <Text style={styles.Text_249_9403}>9:41</Text>
            </View>
          </View>
          <View style={styles.View_249_9404}>
            <View style={styles.View_249_9405}>
              <View style={styles.View_249_9406}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931d/f2e2/bcc981474e403cd28a0906a6ff7f586a"
                  }}
                  style={styles.ImageBackground_249_9407}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b837/fc91/7eb348d65e92f7801078ed0d3ce76cd7"
                  }}
                  style={styles.ImageBackground_249_9410}
                />
              </View>
              <View style={styles.View_249_9411} />
            </View>
            <View style={styles.View_249_9412}>
              <View style={styles.View_249_9413} />
              <View style={styles.View_249_9414} />
              <View style={styles.View_249_9415} />
              <View style={styles.View_249_9416} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e9b/2e3e/93d1bd319e9442bc81dd3ff85b6aeb48"
              }}
              style={styles.ImageBackground_249_9417}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_249_9421}>
        <Text style={styles.Text_249_9421}>Info</Text>
      </View>
      <View style={styles.View_249_9422} />
      <View style={styles.View_249_9423}>
        <Text style={styles.Text_249_9423}>Let’s talk about it</Text>
      </View>
      <View style={styles.View_249_9424}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/7e5c/32a0620b2bfea05a36e637b5cc4aad81"
          }}
          style={styles.ImageBackground_249_9425}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_249_9429}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("249_7182"))
        }
      >
        <View style={styles.View_249_9430}>
          <View style={styles.View_249_9431} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1da2/2f50/b5406f956541a56513b10b49f47fcdba"
            }}
            style={styles.ImageBackground_249_9432}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_249_9437} />
      <View style={styles.View_249_9438}>
        <Text style={styles.Text_249_9438}>Shop Owner</Text>
      </View>
      <View style={styles.View_249_9439}>
        <Text style={styles.Text_249_9439}>Leonard Tan</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_249_9440}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("249_11379"))
        }
      >
        <View style={styles.View_249_9441}>
          <View style={styles.View_249_9442}>
            <Text style={styles.Text_249_9442}>Followers</Text>
          </View>
          <View style={styles.View_249_9443}>
            <Text style={styles.Text_249_9443}>294</Text>
          </View>
          <View style={styles.View_249_9444}>
            <Text style={styles.Text_249_9444}>Following</Text>
          </View>
          <View style={styles.View_249_9445}>
            <Text style={styles.Text_249_9445}>105</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_249_9446}>
        <View style={styles.View_249_9447}>
          <View style={styles.View_249_9448}>
            <View style={styles.View_249_9449}>
              <View style={styles.View_249_9450}>
                <View style={styles.View_249_9451}>
                  <View style={styles.View_249_9452}>
                    <Text style={styles.Text_249_9452}>MESSAGE</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_249_9453} />
          </View>
          <View style={styles.View_249_9454}>
            <Text style={styles.Text_249_9454}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_249_9455} />
      <View style={styles.View_249_9456}>
        <Text style={styles.Text_249_9456}>
          Located in Berkeley, California
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c57d/df84/f5a39092fb0d1feecdb948b1a043c96e"
        }}
        style={styles.ImageBackground_249_9457}
      />
      <View style={styles.View_249_9458}>
        <Text style={styles.Text_249_9458}>www.stoneadvice.com</Text>
      </View>
      <View style={styles.View_249_9459}>
        <Text style={styles.Text_249_9459}>Abc Stone Works</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c39/f19f/0a57a8926397e7c8095cde6e2e9e5060"
        }}
        style={styles.ImageBackground_249_9460}
      />
      <View style={styles.View_249_9461}>
        <View style={styles.View_249_9462}>
          <Text style={styles.Text_249_9462}>
            Phone Number 123 - 456 - 7891
          </Text>
        </View>
      </View>
      <View style={styles.View_249_9463}>
        <Text style={styles.Text_249_9463}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using{" "}
        </Text>
      </View>
      <View style={styles.View_249_9464} />
      <View style={styles.View_249_9465}>
        <Text style={styles.Text_249_9465}>more</Text>
      </View>
      <View style={styles.View_249_9466}>
        <View style={styles.View_249_9467}>
          <View style={styles.View_249_9468}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9469}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9470}
            />
            <View style={styles.View_249_9471}>
              <Text style={styles.Text_249_9471}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9472} />
            <View style={styles.View_249_9473}>
              <Text style={styles.Text_249_9473}>more</Text>
            </View>
            <View style={styles.View_249_9474}>
              <Text style={styles.Text_249_9474}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9475}>
              <Text style={styles.Text_249_9475}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9476}>
              <Text style={styles.Text_249_9476}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9477}
            />
            <View style={styles.View_249_9478}>
              <Text style={styles.Text_249_9478}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9479}>
              <Text style={styles.Text_249_9479}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9480}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9481}
              />
            </View>
            <View style={styles.View_249_9485}>
              <Text style={styles.Text_249_9485}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9486}
            />
            <View style={styles.View_249_9487}>
              <Text style={styles.Text_249_9487}>i</Text>
            </View>
            <View style={styles.View_249_9488}>
              <Text style={styles.Text_249_9488}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9489}
            />
            <View style={styles.View_249_9490}>
              <Text style={styles.Text_249_9490}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9491}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9492}
            />
            <View style={styles.View_249_9493}>
              <Text style={styles.Text_249_9493}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9494}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9495}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9496}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9497}
            />
          </View>
          <View style={styles.View_249_9498}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9499}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9500}
            />
            <View style={styles.View_249_9501}>
              <Text style={styles.Text_249_9501}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9502} />
            <View style={styles.View_249_9503}>
              <Text style={styles.Text_249_9503}>more</Text>
            </View>
            <View style={styles.View_249_9504}>
              <Text style={styles.Text_249_9504}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9505}>
              <Text style={styles.Text_249_9505}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9506}>
              <Text style={styles.Text_249_9506}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9507}
            />
            <View style={styles.View_249_9508}>
              <Text style={styles.Text_249_9508}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9509}>
              <Text style={styles.Text_249_9509}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9510}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9511}
              />
            </View>
            <View style={styles.View_249_9515}>
              <Text style={styles.Text_249_9515}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9516}
            />
            <View style={styles.View_249_9517}>
              <Text style={styles.Text_249_9517}>i</Text>
            </View>
            <View style={styles.View_249_9518}>
              <Text style={styles.Text_249_9518}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9519}
            />
            <View style={styles.View_249_9520}>
              <Text style={styles.Text_249_9520}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9521}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9522}
            />
            <View style={styles.View_249_9523}>
              <Text style={styles.Text_249_9523}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9525}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9526}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9527}
            />
          </View>
          <View style={styles.View_249_9528}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9529}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9530}
            />
            <View style={styles.View_249_9531}>
              <Text style={styles.Text_249_9531}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9532} />
            <View style={styles.View_249_9533}>
              <Text style={styles.Text_249_9533}>more</Text>
            </View>
            <View style={styles.View_249_9534}>
              <Text style={styles.Text_249_9534}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9535}>
              <Text style={styles.Text_249_9535}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9536}>
              <Text style={styles.Text_249_9536}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9537}
            />
            <View style={styles.View_249_9538}>
              <Text style={styles.Text_249_9538}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9539}>
              <Text style={styles.Text_249_9539}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9540}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9541}
              />
            </View>
            <View style={styles.View_249_9545}>
              <Text style={styles.Text_249_9545}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9546}
            />
            <View style={styles.View_249_9547}>
              <Text style={styles.Text_249_9547}>i</Text>
            </View>
            <View style={styles.View_249_9548}>
              <Text style={styles.Text_249_9548}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9549}
            />
            <View style={styles.View_249_9550}>
              <Text style={styles.Text_249_9550}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9551}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9552}
            />
            <View style={styles.View_249_9553}>
              <Text style={styles.Text_249_9553}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9554}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9555}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9556}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9557}
            />
          </View>
          <View style={styles.View_249_9558}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9559}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9560}
            />
            <View style={styles.View_249_9561}>
              <Text style={styles.Text_249_9561}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9562} />
            <View style={styles.View_249_9563}>
              <Text style={styles.Text_249_9563}>more</Text>
            </View>
            <View style={styles.View_249_9564}>
              <Text style={styles.Text_249_9564}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9565}>
              <Text style={styles.Text_249_9565}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9566}>
              <Text style={styles.Text_249_9566}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9567}
            />
            <View style={styles.View_249_9568}>
              <Text style={styles.Text_249_9568}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9569}>
              <Text style={styles.Text_249_9569}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9570}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9571}
              />
            </View>
            <View style={styles.View_249_9575}>
              <Text style={styles.Text_249_9575}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9576}
            />
            <View style={styles.View_249_9577}>
              <Text style={styles.Text_249_9577}>i</Text>
            </View>
            <View style={styles.View_249_9578}>
              <Text style={styles.Text_249_9578}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9579}
            />
            <View style={styles.View_249_9580}>
              <Text style={styles.Text_249_9580}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9581}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9582}
            />
            <View style={styles.View_249_9583}>
              <Text style={styles.Text_249_9583}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9584}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9585}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9586}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9587}
            />
          </View>
          <View style={styles.View_249_9588} />
          <View style={styles.View_249_9589}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9591}
            />
            <View style={styles.View_249_9592}>
              <Text style={styles.Text_249_9592}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9593} />
            <View style={styles.View_249_9594}>
              <Text style={styles.Text_249_9594}>more</Text>
            </View>
            <View style={styles.View_249_9595}>
              <Text style={styles.Text_249_9595}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9596}>
              <Text style={styles.Text_249_9596}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9597}>
              <Text style={styles.Text_249_9597}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9598}
            />
            <View style={styles.View_249_9599}>
              <Text style={styles.Text_249_9599}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9600}>
              <Text style={styles.Text_249_9600}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9601}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9602}
              />
            </View>
            <View style={styles.View_249_9606}>
              <Text style={styles.Text_249_9606}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9607}
            />
            <View style={styles.View_249_9608}>
              <Text style={styles.Text_249_9608}>i</Text>
            </View>
            <View style={styles.View_249_9609}>
              <Text style={styles.Text_249_9609}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9610}
            />
            <View style={styles.View_249_9611}>
              <Text style={styles.Text_249_9611}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9612}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9613}
            />
            <View style={styles.View_249_9614}>
              <Text style={styles.Text_249_9614}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9615}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9616}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9617}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9618}
            />
          </View>
          <View style={styles.View_249_9619}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9620}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9621}
            />
            <View style={styles.View_249_9622}>
              <Text style={styles.Text_249_9622}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9623} />
            <View style={styles.View_249_9624}>
              <Text style={styles.Text_249_9624}>more</Text>
            </View>
            <View style={styles.View_249_9625}>
              <Text style={styles.Text_249_9625}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9626}>
              <Text style={styles.Text_249_9626}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9627}>
              <Text style={styles.Text_249_9627}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9628}
            />
            <View style={styles.View_249_9629}>
              <Text style={styles.Text_249_9629}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9630}>
              <Text style={styles.Text_249_9630}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9631}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9632}
              />
            </View>
            <View style={styles.View_249_9636}>
              <Text style={styles.Text_249_9636}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9637}
            />
            <View style={styles.View_249_9638}>
              <Text style={styles.Text_249_9638}>i</Text>
            </View>
            <View style={styles.View_249_9639}>
              <Text style={styles.Text_249_9639}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9640}
            />
            <View style={styles.View_249_9641}>
              <Text style={styles.Text_249_9641}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9642}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9643}
            />
            <View style={styles.View_249_9644}>
              <Text style={styles.Text_249_9644}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9648}
            />
          </View>
          <View style={styles.View_249_9649}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9650}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9651}
            />
            <View style={styles.View_249_9652}>
              <Text style={styles.Text_249_9652}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9653} />
            <View style={styles.View_249_9654}>
              <Text style={styles.Text_249_9654}>more</Text>
            </View>
            <View style={styles.View_249_9655}>
              <Text style={styles.Text_249_9655}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9656}>
              <Text style={styles.Text_249_9656}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9657}>
              <Text style={styles.Text_249_9657}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9658}
            />
            <View style={styles.View_249_9659}>
              <Text style={styles.Text_249_9659}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9660}>
              <Text style={styles.Text_249_9660}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9661}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9662}
              />
            </View>
            <View style={styles.View_249_9666}>
              <Text style={styles.Text_249_9666}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9667}
            />
            <View style={styles.View_249_9668}>
              <Text style={styles.Text_249_9668}>i</Text>
            </View>
            <View style={styles.View_249_9669}>
              <Text style={styles.Text_249_9669}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9670}
            />
            <View style={styles.View_249_9671}>
              <Text style={styles.Text_249_9671}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9672}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9673}
            />
            <View style={styles.View_249_9674}>
              <Text style={styles.Text_249_9674}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9675}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9676}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9677}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9678}
            />
          </View>
          <View style={styles.View_249_9679}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9680}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9681}
            />
            <View style={styles.View_249_9682}>
              <Text style={styles.Text_249_9682}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9683} />
            <View style={styles.View_249_9684}>
              <Text style={styles.Text_249_9684}>more</Text>
            </View>
            <View style={styles.View_249_9685}>
              <Text style={styles.Text_249_9685}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9686}>
              <Text style={styles.Text_249_9686}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9687}>
              <Text style={styles.Text_249_9687}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9688}
            />
            <View style={styles.View_249_9689}>
              <Text style={styles.Text_249_9689}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9690}>
              <Text style={styles.Text_249_9690}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9691}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9692}
              />
            </View>
            <View style={styles.View_249_9696}>
              <Text style={styles.Text_249_9696}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9697}
            />
            <View style={styles.View_249_9698}>
              <Text style={styles.Text_249_9698}>i</Text>
            </View>
            <View style={styles.View_249_9699}>
              <Text style={styles.Text_249_9699}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9700}
            />
            <View style={styles.View_249_9701}>
              <Text style={styles.Text_249_9701}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9703}
            />
            <View style={styles.View_249_9704}>
              <Text style={styles.Text_249_9704}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9705}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9707}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9708}
            />
          </View>
          <View style={styles.View_249_9709} />
          <View style={styles.View_249_9710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9712}
            />
            <View style={styles.View_249_9713}>
              <Text style={styles.Text_249_9713}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9714} />
            <View style={styles.View_249_9715}>
              <Text style={styles.Text_249_9715}>more</Text>
            </View>
            <View style={styles.View_249_9716}>
              <Text style={styles.Text_249_9716}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9717}>
              <Text style={styles.Text_249_9717}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9718}>
              <Text style={styles.Text_249_9718}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9719}
            />
            <View style={styles.View_249_9720}>
              <Text style={styles.Text_249_9720}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9721}>
              <Text style={styles.Text_249_9721}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9722}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9723}
              />
            </View>
            <View style={styles.View_249_9727}>
              <Text style={styles.Text_249_9727}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9728}
            />
            <View style={styles.View_249_9729}>
              <Text style={styles.Text_249_9729}>i</Text>
            </View>
            <View style={styles.View_249_9730}>
              <Text style={styles.Text_249_9730}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9731}
            />
            <View style={styles.View_249_9732}>
              <Text style={styles.Text_249_9732}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9733}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9734}
            />
            <View style={styles.View_249_9735}>
              <Text style={styles.Text_249_9735}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9737}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9738}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9739}
            />
          </View>
          <View style={styles.View_249_9740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9741}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9742}
            />
            <View style={styles.View_249_9743}>
              <Text style={styles.Text_249_9743}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9744} />
            <View style={styles.View_249_9745}>
              <Text style={styles.Text_249_9745}>more</Text>
            </View>
            <View style={styles.View_249_9746}>
              <Text style={styles.Text_249_9746}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9747}>
              <Text style={styles.Text_249_9747}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9748}>
              <Text style={styles.Text_249_9748}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9749}
            />
            <View style={styles.View_249_9750}>
              <Text style={styles.Text_249_9750}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9751}>
              <Text style={styles.Text_249_9751}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9752}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9753}
              />
            </View>
            <View style={styles.View_249_9757}>
              <Text style={styles.Text_249_9757}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9758}
            />
            <View style={styles.View_249_9759}>
              <Text style={styles.Text_249_9759}>i</Text>
            </View>
            <View style={styles.View_249_9760}>
              <Text style={styles.Text_249_9760}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9761}
            />
            <View style={styles.View_249_9762}>
              <Text style={styles.Text_249_9762}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9763}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9764}
            />
            <View style={styles.View_249_9765}>
              <Text style={styles.Text_249_9765}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9766}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9767}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9768}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9769}
            />
          </View>
          <View style={styles.View_249_9770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9771}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9772}
            />
            <View style={styles.View_249_9773}>
              <Text style={styles.Text_249_9773}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9774} />
            <View style={styles.View_249_9775}>
              <Text style={styles.Text_249_9775}>more</Text>
            </View>
            <View style={styles.View_249_9776}>
              <Text style={styles.Text_249_9776}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9777}>
              <Text style={styles.Text_249_9777}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9778}>
              <Text style={styles.Text_249_9778}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9779}
            />
            <View style={styles.View_249_9780}>
              <Text style={styles.Text_249_9780}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9781}>
              <Text style={styles.Text_249_9781}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9782}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9783}
              />
            </View>
            <View style={styles.View_249_9787}>
              <Text style={styles.Text_249_9787}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9788}
            />
            <View style={styles.View_249_9789}>
              <Text style={styles.Text_249_9789}>i</Text>
            </View>
            <View style={styles.View_249_9790}>
              <Text style={styles.Text_249_9790}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9791}
            />
            <View style={styles.View_249_9792}>
              <Text style={styles.Text_249_9792}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9793}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9794}
            />
            <View style={styles.View_249_9795}>
              <Text style={styles.Text_249_9795}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9796}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9797}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9798}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9799}
            />
          </View>
          <View style={styles.View_249_9800}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9802}
            />
            <View style={styles.View_249_9803}>
              <Text style={styles.Text_249_9803}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9804} />
            <View style={styles.View_249_9805}>
              <Text style={styles.Text_249_9805}>more</Text>
            </View>
            <View style={styles.View_249_9806}>
              <Text style={styles.Text_249_9806}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9807}>
              <Text style={styles.Text_249_9807}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9808}>
              <Text style={styles.Text_249_9808}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9809}
            />
            <View style={styles.View_249_9810}>
              <Text style={styles.Text_249_9810}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9811}>
              <Text style={styles.Text_249_9811}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9812}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9813}
              />
            </View>
            <View style={styles.View_249_9817}>
              <Text style={styles.Text_249_9817}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9818}
            />
            <View style={styles.View_249_9819}>
              <Text style={styles.Text_249_9819}>i</Text>
            </View>
            <View style={styles.View_249_9820}>
              <Text style={styles.Text_249_9820}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9821}
            />
            <View style={styles.View_249_9822}>
              <Text style={styles.Text_249_9822}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9823}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9824}
            />
            <View style={styles.View_249_9825}>
              <Text style={styles.Text_249_9825}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9826}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9827}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9828}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9829}
            />
          </View>
          <View style={styles.View_249_9830} />
          <View style={styles.View_249_9831}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9832}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9833}
            />
            <View style={styles.View_249_9834}>
              <Text style={styles.Text_249_9834}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9835} />
            <View style={styles.View_249_9836}>
              <Text style={styles.Text_249_9836}>more</Text>
            </View>
            <View style={styles.View_249_9837}>
              <Text style={styles.Text_249_9837}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9838}>
              <Text style={styles.Text_249_9838}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9839}>
              <Text style={styles.Text_249_9839}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9840}
            />
            <View style={styles.View_249_9841}>
              <Text style={styles.Text_249_9841}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9842}>
              <Text style={styles.Text_249_9842}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9843}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9844}
              />
            </View>
            <View style={styles.View_249_9848}>
              <Text style={styles.Text_249_9848}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9849}
            />
            <View style={styles.View_249_9850}>
              <Text style={styles.Text_249_9850}>i</Text>
            </View>
            <View style={styles.View_249_9851}>
              <Text style={styles.Text_249_9851}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9852}
            />
            <View style={styles.View_249_9853}>
              <Text style={styles.Text_249_9853}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9855}
            />
            <View style={styles.View_249_9856}>
              <Text style={styles.Text_249_9856}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9857}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9858}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9859}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9860}
            />
          </View>
          <View style={styles.View_249_9861}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9862}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9863}
            />
            <View style={styles.View_249_9864}>
              <Text style={styles.Text_249_9864}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9865} />
            <View style={styles.View_249_9866}>
              <Text style={styles.Text_249_9866}>more</Text>
            </View>
            <View style={styles.View_249_9867}>
              <Text style={styles.Text_249_9867}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9868}>
              <Text style={styles.Text_249_9868}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9869}>
              <Text style={styles.Text_249_9869}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9870}
            />
            <View style={styles.View_249_9871}>
              <Text style={styles.Text_249_9871}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9872}>
              <Text style={styles.Text_249_9872}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9873}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9874}
              />
            </View>
            <View style={styles.View_249_9878}>
              <Text style={styles.Text_249_9878}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9879}
            />
            <View style={styles.View_249_9880}>
              <Text style={styles.Text_249_9880}>i</Text>
            </View>
            <View style={styles.View_249_9881}>
              <Text style={styles.Text_249_9881}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9882}
            />
            <View style={styles.View_249_9883}>
              <Text style={styles.Text_249_9883}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9884}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9885}
            />
            <View style={styles.View_249_9886}>
              <Text style={styles.Text_249_9886}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9887}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9888}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9890}
            />
          </View>
          <View style={styles.View_249_9891}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9892}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9893}
            />
            <View style={styles.View_249_9894}>
              <Text style={styles.Text_249_9894}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9895} />
            <View style={styles.View_249_9896}>
              <Text style={styles.Text_249_9896}>more</Text>
            </View>
            <View style={styles.View_249_9897}>
              <Text style={styles.Text_249_9897}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9898}>
              <Text style={styles.Text_249_9898}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9899}>
              <Text style={styles.Text_249_9899}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9900}
            />
            <View style={styles.View_249_9901}>
              <Text style={styles.Text_249_9901}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9902}>
              <Text style={styles.Text_249_9902}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9903}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9904}
              />
            </View>
            <View style={styles.View_249_9908}>
              <Text style={styles.Text_249_9908}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9909}
            />
            <View style={styles.View_249_9910}>
              <Text style={styles.Text_249_9910}>i</Text>
            </View>
            <View style={styles.View_249_9911}>
              <Text style={styles.Text_249_9911}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9912}
            />
            <View style={styles.View_249_9913}>
              <Text style={styles.Text_249_9913}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9915}
            />
            <View style={styles.View_249_9916}>
              <Text style={styles.Text_249_9916}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9917}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9918}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9919}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9920}
            />
          </View>
          <View style={styles.View_249_9921}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6b/a9b4/6b685ace673e78cecea371e8fe80f728"
              }}
              style={styles.ImageBackground_249_9922}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd4/d02d/0ffa52dabd44ba8fd05edcbf680e141c"
              }}
              style={styles.ImageBackground_249_9923}
            />
            <View style={styles.View_249_9924}>
              <Text style={styles.Text_249_9924}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using{" "}
              </Text>
            </View>
            <View style={styles.View_249_9925} />
            <View style={styles.View_249_9926}>
              <Text style={styles.Text_249_9926}>more</Text>
            </View>
            <View style={styles.View_249_9927}>
              <Text style={styles.Text_249_9927}>Shop Owner - Moderator</Text>
            </View>
            <View style={styles.View_249_9928}>
              <Text style={styles.Text_249_9928}>Luke Smith</Text>
            </View>
            <View style={styles.View_249_9929}>
              <Text style={styles.Text_249_9929}>12 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709a/92fe/4580b29683f26937148a988544fb0079"
              }}
              style={styles.ImageBackground_249_9930}
            />
            <View style={styles.View_249_9931}>
              <Text style={styles.Text_249_9931}>
                Expert Content - Sales training 
              </Text>
            </View>
            <View style={styles.View_249_9932}>
              <Text style={styles.Text_249_9932}>
                This high quality content is sponsored by: George Russell
              </Text>
            </View>
            <View style={styles.View_249_9933}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c875/ea53/b0fc073f57c56f68a0f8b76fd45daf88"
                }}
                style={styles.ImageBackground_249_9934}
              />
            </View>
            <View style={styles.View_249_9938}>
              <Text style={styles.Text_249_9938}>Edit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c07/555d/ed6f39c9a4241d24bb03672e7520b088"
              }}
              style={styles.ImageBackground_249_9939}
            />
            <View style={styles.View_249_9940}>
              <Text style={styles.Text_249_9940}>i</Text>
            </View>
            <View style={styles.View_249_9941}>
              <Text style={styles.Text_249_9941}>36</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/53f0/1a2c59a80933c94d6bb6b4e6e36400da"
              }}
              style={styles.ImageBackground_249_9942}
            />
            <View style={styles.View_249_9943}>
              <Text style={styles.Text_249_9943}>69</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaf/01b8/57966bb1e4fe5c5c348c07ce715636a8"
              }}
              style={styles.ImageBackground_249_9944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862f/ad16/3452b737c4fbca0a31a99f1aa0dd7784"
              }}
              style={styles.ImageBackground_249_9945}
            />
            <View style={styles.View_249_9946}>
              <Text style={styles.Text_249_9946}>1.1K</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfaa/6574/240e0132216dda616ab214e44a5e3572"
              }}
              style={styles.ImageBackground_249_9947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c6/662c/eae9c247b7e70910b27ccb48db5be600"
              }}
              style={styles.ImageBackground_249_9948}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253b/aac2/b44287f4e030e36596a885901aa276c8"
              }}
              style={styles.ImageBackground_249_9949}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2cf/f1de/e4ad1d8148764373e030c63f557a6bb5"
              }}
              style={styles.ImageBackground_249_9950}
            />
          </View>
          <View style={styles.View_249_9951} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7b9/9028/c25dc055ba75d1cf81d4526fac516e3f"
        }}
        style={styles.ImageBackground_249_9952}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ac7/164e/f44bfefbdf675f983b355a1a63f13c69"
        }}
        style={styles.ImageBackground_249_9953}
      />
      <View style={styles.View_249_9955}>
        <View style={styles.View_249_9956}>
          <View style={styles.View_249_9957}>
            <View style={styles.View_249_9958}>
              <View style={styles.View_249_9959}>
                <View style={styles.View_249_9960}>
                  <View style={styles.View_249_9961} />
                </View>
              </View>
            </View>
            <View style={styles.View_249_9963}>
              <View style={styles.View_249_9964} />
            </View>
            <View style={styles.View_249_9965}>
              <View style={styles.View_249_9966}>
                <View style={styles.View_249_9967} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f4d/312f/c88bc9d20e2d8004037f493e2537bd15"
                  }}
                  style={styles.ImageBackground_249_9968}
                />
              </View>
            </View>
            <View style={styles.View_249_10008}>
              <View style={styles.View_249_10009} />
            </View>
            <View style={styles.View_249_10010}>
              <Text style={styles.Text_249_10010}>Community</Text>
            </View>
            <View style={styles.View_249_10011}>
              <Text style={styles.Text_249_10011}>Messages</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_249_10012}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("249_2727"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81c6/0d4a/01d7116f2d1ef0dc345fe9d750263094"
                }}
                style={styles.ImageBackground_249_10013}
              />
            </TouchableOpacity>
            <View style={styles.View_249_10016}>
              <TouchableOpacity
                style={styles.TouchableOpacity_249_10017}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("249_8896")
                  )
                }
              >
                <View style={styles.View_249_10018} />
                <View style={styles.View_249_10019}>
                  <View style={styles.View_249_10020}>
                    <View style={styles.View_249_10021}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21d9/472c/20c64e929d8c1544fde23744ae110f3e"
                        }}
                        style={styles.ImageBackground_249_10022}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e4/f2ef/1d01f47cf9384758582cf3b9b5ac544b"
              }}
              style={styles.ImageBackground_249_10027}
            />
            <View style={styles.View_249_10030}>
              <Text style={styles.Text_249_10030}>Resources</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4c/c85c/7d732dbd490850b633898c8c447f1330"
              }}
              style={styles.ImageBackground_249_10031}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87c2/15cb/892e89f2a377b4176b9f3858cbf8beab"
              }}
              style={styles.ImageBackground_249_10032}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c3/1363/769565084ec1e50a309921802cfc8684"
              }}
              style={styles.ImageBackground_249_10033}
            />
            <View style={styles.View_249_10034}>
              <Text style={styles.Text_249_10034}>12</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87c2/15cb/892e89f2a377b4176b9f3858cbf8beab"
              }}
              style={styles.ImageBackground_249_10035}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c3/1363/769565084ec1e50a309921802cfc8684"
              }}
              style={styles.ImageBackground_249_10036}
            />
            <View style={styles.View_249_10037}>
              <Text style={styles.Text_249_10037}>36</Text>
            </View>
            <View style={styles.View_249_10038}>
              <View style={styles.View_249_10039}>
                <View style={styles.View_249_10040} />
                <View style={styles.View_249_10041}>
                  <View style={styles.View_249_10042} />
                </View>
                <View style={styles.View_249_10043}>
                  <Text style={styles.Text_249_10043}>Notifications</Text>
                </View>
                <TouchableOpacity
                  style={styles.TouchableOpacity_249_10044}
                  onPress={() =>
                    this.props.navigation.navigate(
                      getNavigationScreen("249_10048")
                    )
                  }
                >
                  <View style={styles.View_249_10045} />
                </TouchableOpacity>
                <View style={styles.View_249_10046}>
                  <Text style={styles.Text_249_10046}>My Profile</Text>
                </View>
                <View style={styles.View_249_10047} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_262_350} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  ImageBackground_249_9392: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9393: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  View_249_9394: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9395: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9396: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9397: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  View_249_9398: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9399: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2175%"),
    top: hp("-554%")
  },
  View_249_9400: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  View_249_9401: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9402: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_9403: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_249_9404: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_9405: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_249_9406: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_249_9407: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_249_9410: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_249_9411: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 217, 100, 1)",
    borderWidth: 1
  },
  View_249_9412: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_249_9413: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_249_9414: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_249_9415: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_249_9416: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_249_9417: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9421: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_249_9421: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9422: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("65%"),
    backgroundColor: "rgba(142, 142, 147, 1)",
    opacity: 0.11999999731779099
  },
  View_249_9423: {
    width: wp("30%"),
    minWidth: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("66%"),
    justifyContent: "center"
  },
  Text_249_9423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9424: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9425: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_249_9429: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9430: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9431: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2175%"),
    top: hp("-554%")
  },
  ImageBackground_249_9432: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9437: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_249_9438: {
    flexGrow: 1,
    width: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_249_9438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9439: {
    flexGrow: 1,
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_249_9439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  TouchableOpacity_249_9440: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("58%")
  },
  View_249_9441: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9442: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9442: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9443: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9444: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9445: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9446: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("52%")
  },
  View_249_9447: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9448: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9449: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%")
  },
  View_249_9450: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  View_249_9451: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9452: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_249_9452: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "uppercase"
  },
  View_249_9453: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  View_249_9454: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_249_9454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "uppercase"
  },
  View_249_9455: {
    width: wp("28%"),
    height: hp("3%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_249_9456: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_249_9456: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_249_9457: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_249_9458: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_249_9458: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_249_9459: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_249_9459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_249_9460: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_249_9461: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("103%")
  },
  View_249_9462: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_249_9463: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_249_9463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9464: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("84%")
  },
  View_249_9465: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_249_9465: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9466: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("514%"),
    minHeight: hp("514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%")
  },
  View_249_9467: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("514%"),
    minHeight: hp("514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9468: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_249_9469: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9470: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9471: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9472: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9473: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9473: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9474: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9475: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9476: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9476: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9477: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9478: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9479: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9480: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9481: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9485: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9485: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9486: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9487: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9488: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9488: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9489: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9490: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9490: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9491: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9492: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9493: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9493: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9494: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9495: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9496: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9497: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9498: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_249_9499: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9500: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9501: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9501: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9502: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9503: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9503: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9504: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9505: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9506: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9506: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9507: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9508: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9509: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9509: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9510: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9511: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9515: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9515: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9516: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9517: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9518: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9518: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9519: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9520: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9520: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9521: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9522: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9523: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9523: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9524: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9525: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9526: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9527: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9528: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  ImageBackground_249_9529: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9530: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9531: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9531: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9532: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9533: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9533: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9534: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9534: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9535: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9535: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9536: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9536: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9537: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9538: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9538: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9539: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9539: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9540: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9541: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9545: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9545: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9546: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9547: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9548: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9548: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9549: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9550: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9550: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9551: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9552: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9553: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9553: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9554: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9555: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9556: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9557: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9558: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  ImageBackground_249_9559: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9560: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9561: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9562: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9563: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9563: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9564: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9564: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9565: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9565: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9566: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9566: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9567: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9568: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9569: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9570: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9571: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9575: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9575: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9576: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9578: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9578: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9579: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9580: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9580: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9581: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9582: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9583: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9583: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9584: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9585: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9586: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9587: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9588: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_249_9589: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("130%")
  },
  ImageBackground_249_9590: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9591: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9592: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9592: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9593: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9594: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9594: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9595: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9596: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9596: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9597: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9597: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9598: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9599: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9599: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9600: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9600: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9601: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9602: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9606: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9606: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9607: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9608: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9608: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9609: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9609: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9610: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9611: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9611: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9612: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9613: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9614: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9614: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9615: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9616: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9617: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9618: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9619: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("130%")
  },
  ImageBackground_249_9620: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9621: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9622: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9623: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9624: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9624: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9625: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9626: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9627: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9627: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9628: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9629: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9630: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9631: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9632: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9636: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9636: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9637: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9638: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9639: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9639: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9640: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9641: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9641: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9642: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9643: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9644: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9644: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9645: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9646: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9647: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9648: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9649: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("195%")
  },
  ImageBackground_249_9650: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9651: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9652: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9652: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9653: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9654: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9654: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9655: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9656: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9656: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9657: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9657: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9658: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9659: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9659: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9660: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9660: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9661: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9662: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9666: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9666: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9667: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9668: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9669: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9669: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9670: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9671: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9671: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9672: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9673: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9674: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9674: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9675: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9676: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9677: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9678: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9679: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("195%")
  },
  ImageBackground_249_9680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9681: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9682: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9683: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9684: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9684: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9685: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9685: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9686: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9686: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9687: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9687: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9688: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9689: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9690: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9690: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9691: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9692: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9696: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9696: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9698: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9698: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9699: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9699: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9700: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9701: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9701: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9702: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9703: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9704: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9704: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9705: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9706: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9707: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9708: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9709: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("192%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_249_9710: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("260%")
  },
  ImageBackground_249_9711: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9712: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9713: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9714: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9715: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9715: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9716: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9716: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9717: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9718: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9718: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9719: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9720: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9721: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9722: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9723: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9727: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9727: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9728: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9729: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9729: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9730: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9730: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9731: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9732: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9732: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9733: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9734: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9735: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9735: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9736: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9737: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9738: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9739: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9740: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("260%")
  },
  ImageBackground_249_9741: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9742: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9743: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9743: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9744: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9745: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9745: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9746: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9747: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9748: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9748: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9749: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9750: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9751: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9752: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9753: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9757: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9757: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9758: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9759: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9759: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9760: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9760: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9761: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9762: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9762: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9763: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9764: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9765: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9765: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9766: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9767: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9768: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9769: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9770: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("325%")
  },
  ImageBackground_249_9771: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9772: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9773: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9773: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9774: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9775: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9775: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9776: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9777: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9777: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9778: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9778: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9779: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9780: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9780: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9781: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9781: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9782: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9783: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9787: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9787: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9788: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9789: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9790: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9790: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9791: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9792: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9792: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9793: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9794: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9795: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9795: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9796: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9797: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9798: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9799: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9800: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("325%")
  },
  ImageBackground_249_9801: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9802: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9803: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9803: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9804: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9805: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9805: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9806: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9806: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9807: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9808: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9808: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9809: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9810: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9810: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9811: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9812: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9813: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9817: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9817: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9818: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9819: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9820: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9820: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9821: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9822: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9822: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9823: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9824: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9825: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9825: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9826: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9827: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9828: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9829: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9830: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("322%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  View_249_9831: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("390%")
  },
  ImageBackground_249_9832: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9833: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9834: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9835: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9836: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9836: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9837: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9838: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9839: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9839: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9840: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9841: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9842: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9843: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9844: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9848: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9848: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9849: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9850: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9851: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9851: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9852: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9853: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9853: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9854: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9855: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9856: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9856: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9857: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9858: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9859: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9860: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9861: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("390%")
  },
  ImageBackground_249_9862: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9863: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9864: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9864: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9865: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9866: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9866: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9867: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9868: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9869: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9869: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9870: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9871: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9871: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9872: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9872: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9873: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9874: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9878: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9878: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9879: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9880: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9881: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9881: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9882: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9883: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9883: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9884: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9885: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9886: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9886: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9887: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9888: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9889: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9890: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9891: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("455%")
  },
  ImageBackground_249_9892: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9893: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9894: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9894: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9895: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9896: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9896: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9897: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9898: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9899: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9899: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9900: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9901: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9902: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9903: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9904: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9908: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9908: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9909: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9910: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9911: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9911: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9912: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9913: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9913: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9914: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9915: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9916: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9916: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9917: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9918: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9919: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9920: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9921: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("455%")
  },
  ImageBackground_249_9922: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_249_9923: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 2
  },
  View_249_9924: {
    flexGrow: 1,
    width: wp("90%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_249_9924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9925: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("13%")
  },
  View_249_9926: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_249_9926: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9927: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_249_9927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9928: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_249_9928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_249_9929: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_249_9929: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9930: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_249_9931: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_249_9931: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9932: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9933: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_9934: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_249_9938: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9938: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9939: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("47%")
  },
  View_249_9940: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_249_9940: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_249_9941: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9941: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9942: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  View_249_9943: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9943: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9944: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_249_9945: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_249_9946: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_249_9946: {
    color: "rgba(137, 138, 141, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_249_9947: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9948: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_249_9949: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_249_9950: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9951: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("452%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_249_9952: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("95%")
  },
  ImageBackground_249_9953: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_249_9955: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%")
  },
  View_249_9956: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9957: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9958: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9959: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9960: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_9961: {
    width: wp("96%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_249_9963: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9964: {
    width: wp("35%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_249_9965: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9966: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_9967: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    opacity: 0.9200000166893005
  },
  ImageBackground_249_9968: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_10008: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_10009: {
    width: wp("35%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_249_10010: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_249_10010: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_249_10011: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_249_10011: {
    color: "rgba(148, 148, 148, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_249_10012: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("7%")
  },
  ImageBackground_249_10013: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_249_10016: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  TouchableOpacity_249_10017: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_10018: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_10019: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_10020: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_10021: {
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_249_10022: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_249_10027: {
    width: wp("46%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_249_10030: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_249_10030: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_249_10031: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_249_10032: {
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("6%")
  },
  ImageBackground_249_10033: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%")
  },
  View_249_10034: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_249_10034: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_249_10035: {
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%")
  },
  ImageBackground_249_10036: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%")
  },
  View_249_10037: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_249_10037: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_249_10038: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_249_10039: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_249_10040: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_249_10041: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%")
  },
  View_249_10042: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_10043: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_249_10043: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  TouchableOpacity_249_10044: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%")
  },
  View_249_10045: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_249_10046: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_249_10046: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_249_10047: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_262_350: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 0)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
