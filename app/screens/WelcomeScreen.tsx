import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, ViewStyle } from "react-native"
import {
  Button,
  Screen,
  Text,
} from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { ROUTES } from "app/utils/constants"

const welcomeLogo = require("../../assets/images/logo.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> { }

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {
  const { navigate } = useNavigation()

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
        onPress={() => navigate(ROUTES.NEW_EVENT)}
        tx="welcomeScreen.initEvent"
      />
      <Button
        preset="reversed"
        style={$button}
        onPress={() => navigate(ROUTES.MANAGE_EVENTS)}
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
