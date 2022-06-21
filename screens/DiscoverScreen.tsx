import { RootStackScreenProps } from "../types";
import styled from "styled-components/native";
import { useState, useRef, useEffect } from "react";
import { Button, Typography, RealmIcon, Loading } from "../components";
import { Switch } from "react-native-ui-lib";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  fetchNotificationSettings,
  subscribeToNotifications,
} from "../store/notificationSlice";
import * as Haptics from "expo-haptics";
import { TouchableOpacity } from "react-native";
import { DiscoverCard } from "../elements";
import DiscoverData from "../assets/Discover.json";

export default function DiscoverScreen({
  navigation,
}: RootStackScreenProps<"RealmSettings">) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { selectedRealm } = useAppSelector((state) => state.realms);

  const { featured, tooling, treasury } = DiscoverData;

  if (!selectedRealm) {
    return <Loading />;
  }

  const handleClick = () => {
    navigation.push("RealmSettings2");
  };

  return (
    <Container>
      <Typography
        bold={true}
        size="h3"
        text={"Featured"}
        marginBottom="2"
        shade="300"
      />
      {featured.map((feature) => (
        <DiscoverCard
          data={feature as Feature}
          useBackgroundImage={false}
          key={`${feature.displayName}-feature`}
        />
      ))}
      <Typography
        bold={true}
        size="h3"
        shade="300"
        text={"Tools"}
        marginBottom="2"
      />
      <HorizontalScrollView
        horizontal={true}
        scrollIndicatorInsets={{ bottom: -10 }}
        contentContainerStyle={{ padding: 12 }}
      >
        {tooling.map((feature) => (
          <DiscoverCard
            data={feature as Feature}
            isHorizontal={true}
            useBackgroundImage={true}
            key={`${feature.displayName}-tooling`}
          />
        ))}
      </HorizontalScrollView>
      <Typography
        bold={true}
        size="h3"
        shade="300"
        text={"Treasury Management"}
        marginBottom="2"
      />
      <HorizontalScrollView
        horizontal={true}
        scrollIndicatorInsets={{ bottom: -10 }}
        contentContainerStyle={{ padding: 12 }}
      >
        {treasury.map((feature) => (
          <DiscoverCard
            data={feature as Feature}
            isHorizontal={true}
            useBackgroundImage={true}
            key={`${feature.displayName}-treasury`}
          />
        ))}
      </HorizontalScrollView>
      <EmptyView />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background: ${(props: any) => props.theme.gray[900]};
  padding: ${(props) => props.theme.spacing[3]};
`;

const HorizontalScrollView = styled.ScrollView`
  flex: 1;
  margin-bottom: ${(props) => props.theme.spacing[3]};
  border-radius: 8px;
  background: ${(props: any) => props.theme.gray[1000]};
`;

const EmptyView = styled.View`
  height: 100px;
`;
