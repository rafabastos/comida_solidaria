import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Screen,
  Text,
} from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("../../assets/images/logo.png")

interface ManageEventsScreenProps extends AppStackScreenProps<"Welcome"> { }

export const ManageEventsScreen: FC<ManageEventsScreenProps> = observer(function ManageEventsScreen(
) {
  return (
    <Screen
      style={$container}
      preset='fixed'
      safeAreaEdges={["top"]}
    >
      <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
      <Text
        testID="welcome-heading"
        style={$welcomeHeading}
        tx="welcomeScreen.readyForLaunch"
        preset="heading"
      />
      <Button
        preset="reversed"
        style={$button}
        onPress={() => { }}
        tx="welcomeScreen.initEvent"
      />
      <Button
        preset="reversed"
        style={$button}
        onPress={() => { }}
        tx="welcomeScreen.manageEvents"
      />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xxl
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}
const $button: ViewStyle = {
  marginTop: spacing.lg
}
const $welcomeHeading: TextStyle = {
  marginVertical: spacing.xxxl
}
