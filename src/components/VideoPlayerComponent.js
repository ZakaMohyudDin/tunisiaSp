import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { normalize } from "../utils/helper";
import Video from "react-native-video";
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";

const VideoPlayerComponent = ({
  text,
  textAlign,
  color,
  source,
  height,
  width,
}) => {
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState("content");

  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert("Oh! ", error);

  const exitFullScreen = () => {
    alert("Exit full screen");
  };
  const enterFullScreen = () => {};

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == "content") setScreenType("cover");
    else setScreenType("content");
  };

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );

  const onSeeking = (currentTime) => setCurrentTime(currentTime);

  return (
    <View
      style={{
        borderRadius: normalize(3),
        height: height || normalize(60),
        width: width || normalize(92),
        borderRadius: normalize(3),
        alignSelf: "center",
      }}
    >
      {source ? (
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={videoPlayer}
          resizeMode={"cover"}
          source={{ uri: source }}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          playWhenInactive={true}
          // resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      ) : (
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={videoPlayer}
          resizeMode={"cover"}
          source={require("../assets/SplashScreenVideo.mp4")}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          playWhenInactive={true}
          // resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      )}

      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        toolbar={renderToolbar()}
      />
    </View>
  );
};
export default VideoPlayerComponent;

const styles = StyleSheet.create({
  backgroundVideo: {
    borderRadius: normalize(2),
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
