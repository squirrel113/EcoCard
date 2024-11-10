import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import EllipseGroup from "./components/EllipseGroup";

const MainPageDONE = () => {
  return (
    <View style={styles.mainPageDone}>
      <View style={[styles.mainPageDoneChild, styles.childPosition]} />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 0.47, 1]}
          colors={["#01efaf", "#6098d3", "#ef40ed"]}
        />
        <View style={[styles.rohanFernadesParent, styles.groupParentFlexBox]}>
          <Text style={[styles.rohanFernades, styles.text3Typo]}>
            Kevin Anand
          </Text>
          <View style={[styles.lockSymbol1Parent, styles.groupParentFlexBox]}>
            <Image
              style={[styles.lockSymbol1, styles.lockSymbol1Layout]}
              contentFit="cover"
              source={require("../../assets/lock-symbol-1.png")}
            />
            <Image
              style={[styles.materialSymbols1, styles.lockSymbol1Layout]}
              contentFit="cover"
              source={require("../../assets/material-symbol-1.svg")}
            />
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../../assets/ellipse-5.svg")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../../assets/ellipse-5.svg")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../../assets/ellipse-5.svg")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../../assets/ellipse-5.svg")}
            />
          </View>
          <EllipseGroup />
          <EllipseGroup />
          <EllipseGroup />
          <Text style={[styles.text, styles.textTypo1]}>2556</Text>
        </View>
        <Text style={[styles.exp1023, styles.textTypo1]}>Exp: 10/23</Text>
        <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.groupIconLayout}
              contentFit="cover"
              source={require("../../assets/group-2.png")}
            />
            <Image
              style={[styles.frameChild13, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../../assets/group-1.png")}
            />
          </View>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../../assets/image-1.png")}
          />
        </View>
      </View>
      <View style={[styles.mainPageDoneItem, styles.childPosition]} />
      <Text style={[styles.hiRohanReadyContainer, styles.frameParentPosition]}>
        <Text style={styles.hiRohan}>{`Hi Rohan!
`}</Text>
        <Text style={[styles.readyToGo, styles.readyToGoClr]}>
          Ready to go green?
        </Text>
      </Text>
      <View style={styles.groupContainer}>
        <View style={styles.groupLayout}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View
            style={[
              styles.codeBlockDocumentScannParent,
              styles.groupParentFlexBox,
            ]}
          >
            <Image
              style={styles.codeBlockDocumentScann}
              contentFit="cover"
              source={require("../../assets/document-scanner.png")}
            />
            <Text style={[styles.scanReceipt, styles.readyToGoClr]}>
              Scan Receipt
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.materialSymbols32Parent, styles.parentPosition]}>
            <Image
              style={styles.materialSymbols32}
              contentFit="cover"
              source={require("../../assets/material-symbol-3-2.png")}
            />
            <Text style={[styles.scanReceipt, styles.readyToGoClr]}>
              Best Benefits
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <View style={[styles.vectorParent, styles.parentPosition]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
            <Text style={[styles.scanReceipt, styles.readyToGoClr]}>
              Find Cost
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  groupParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text3Typo: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  lockSymbol1Layout: {
    height: 15,
    overflow: "hidden",
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    // fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "600",
  },
  groupIconLayout: {
    height: 30,
    width: 30,
  },
  frameParentPosition: {
    left: 25,
    position: "absolute",
  },
  readyToGoClr: {
    color: Color.colorGray_100,
    fontWeight: "500",
  },
  groupLayout: {
    height: 77,
    width: 117,
  },
  parentPosition: {
    top: 17,
    alignItems: "center",
    position: "absolute",
  },
  recentScansTypo: {
    // color: Color.colorGray_200,
    textAlign: "left",
    fontWeight: "600",
  },
  textTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    // fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupChild1Layout: {
    height: 71,
    width: 71,
  },
  taxTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    // fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontWeight: "600",
  },
  mainPageDoneChild: {
    backgroundColor: "#171717",
    width: 431,
    height: 586,
    top: 0,
    left: 0,
  },
  groupChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    height: 207,
    width: 385,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rohanFernades: {
    textAlign: "left",
    color: Color.colorWhite,
    // fontFamily: FontFamily.interSemiBold,
  },
  lockSymbol1: {
    width: 16,
  },
  materialSymbols1: {
    width: 15,
    marginLeft: 9,
  },
  lockSymbol1Parent: {
    marginLeft: 146,
    flexDirection: "row",
  },
  rohanFernadesParent: {
    top: 43,
    flexDirection: "row",
    width: 342,
    justifyContent: "center",
    left: 25,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 3.5,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  ellipseGroup: {
    marginLeft: 12,
    flexDirection: "row",
  },
  text: {
    // fontFamily: FontFamily.poppinsSemiBold,
    marginLeft: 12,
  },
  frameParent: {
    top: 76,
    width: 220,
    alignItems: "center",
    flexDirection: "row",
    left: 25,
    position: "absolute",
  },
  exp1023: {
    top: 97,
    width: 54,
    // fontFamily: FontFamily.poppinsSemiBold,
    left: 25,
    position: "absolute",
  },
  frameChild13: {
    marginLeft: 7,
  },
  image1Icon: {
    width: 32,
    height: 32,
    marginLeft: 237,
  },
  frameGroup: {
    top: 145,
    flexDirection: "row",
    width: 342,
    justifyContent: "center",
    left: 25,
    position: "absolute",
  },
  rectangleParent: {
    top: 128,
    height: 207,
    width: 385,
    left: 18,
    position: "absolute",
  },
  // bottom part
  mainPageDoneItem: {
    top: 462,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    // backgroundColor: "#303030",
    height: 470,
    width: 430,
  },
  hiRohan: {
    fontSize: 24,
    fontWeight: "700",
    // fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
  },
  readyToGo: {
    // fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    fontWeight: "500",
  },
  hiRohanReadyContainer: {
    top: 38,
    textAlign: "left",
  },
  groupItem: {
    backgroundColor: "#28cdbe",
    borderRadius: Border.br_3xs,
    height: 77,
    left: 0,
    top: 0,
    position: "absolute",
  },
  codeBlockDocumentScann: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  scanReceipt: {
    fontSize: FontSize.size_sm,
    // fontFamily: FontFamily.poppinsMedium,
    marginTop: 3,
    textAlign: "left",
  },
  codeBlockDocumentScannParent: {
    top: 14,
    left: 13,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "#8880db",
    borderRadius: Border.br_3xs,
    height: 77,
    left: 0,
    top: 0,
    position: "absolute",
  },
  materialSymbols32: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  materialSymbols32Parent: {
    left: 13,
  },
  rectangleContainer: {
    marginLeft: 17,
  },
  rectangleView: {
    backgroundColor: "#de4cea",
    borderRadius: Border.br_3xs,
    height: 77,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: 22,
    height: 18,
  },
  vectorParent: {
    left: 26,
  },
  groupContainer: {
    top: 347,
    flexDirection: "row",
    left: 18,
    position: "absolute",
  },
  mainPageDoneInner: {
    top: 140,
    left: 413,
    height: 183,
    width: 117,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  mainPageDoneChild1: {
    top: 473,
    left: 166,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 87,
    height: 3,
    position: "absolute",
  },
  recentScans: {
    fontSize: 18,
    // fontFamily: FontFamily.interSemiBold,
  },
  text1: {
    marginLeft: 161,
  },
  recentScansParent: {
    top: 506,
    flexDirection: "row",
    left: 25,
    position: "absolute",
  },
  text2: {
    top: 749,
    left: 316,
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  image2Icon: {
    top: 13,
    left: 16,
    width: 38,
    height: 45,
    position: "absolute",
  },
  laysClassicPotato: {
    fontSize: FontSize.size_base,
    width: 223,
    height: 21,
    // fontFamily: FontFamily.poppinsSemiBold,
  },
  frameChild14: {
    width: 5,
    height: 5,
    marginLeft: 7,
  },
  tax: {
    marginLeft: 7,
  },
  walmartParent: {
    marginTop: 3,
    flexDirection: "row",
  },
  laysClassicPotatoSnaParent: {
    marginLeft: 15,
  },
  text3: {
    width: 45,
    marginLeft: 15,
    // fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupParent1: {
    flexDirection: "row",
  },
  groupParent2: {
    marginTop: 21,
    flexDirection: "row",
  },
  frameContainer: {
    top: 558,
  },
  frameParent1: {
    top: 772,
  },
  mainPageDoneChild2: {
    top: 40,
    left: 353,
    width: 50,
    height: 50,
    position: "absolute",
  },
  mainPageDone: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    height: 932,
    overflow: "hidden",
    width: 430,
  },
});

export default MainPageDONE;
