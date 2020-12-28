import { ParagraphBackgroundImg } from "../styles";
import TrackVisibility from "react-on-screen";

export default function BackgroundImage({ children }: { children: any }) {
  return (
    <TrackVisibility once offset={500} style={{ width: "100%" }}>
      {({ isVisible }) =>
        isVisible && <ParagraphBackgroundImg>{children}</ParagraphBackgroundImg>
      }
    </TrackVisibility>
  );
}
