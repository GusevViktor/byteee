import React, { useState } from "react";
import style from "./style.module.scss";
import { Button, Text } from "@viktor666/byteee-kit";
import { Session } from "../../../../../api/api";
import { SessionsInvitationList } from "./SessionsInvitationList";
import { useDesktopType } from "../../../../../hooks";

interface Props {
  sessions: Session[];
  eventType: "public" | "private";
}

const {
  wrap,
  buttons,
  accordion,
  sessions_section,
  final_form_accept,
  final_form_decline,
  acception_buttons,
  decline_buttons,
  description,
  list_description
} = style;

export const InvitationToSpeaker = ({ sessions, eventType }: Props) => {
  const [isSessionsVisible, setSessionsVisible] = useState<boolean>(true);
  const [
    isAcceptedInvitation,
    setIsAcceptedInvitation
  ] = useState<boolean | null>(null);
  const isDesktop = useDesktopType();

  const renderFinalNotification = () => {

    const renderDescription = () => {
      if (!isAcceptedInvitation && eventType === "private") {
        return "We’ll notify the event organizer of your decision.";
      } else if (!isAcceptedInvitation && eventType === "public") {
        return "You can still participate as an attendee –" +
                    " just register to get the ticket.";
      } else {
        return "Enter the event space to check it out and be prepared for the" +
                    " broadcast. If you change your mind, you can cancel your" +
                    " participation before the event starts. ";
      }
    };
    const renderButtons = () => {
      if (isAcceptedInvitation) {
        return (
          <React.Fragment>
            <Button type="outline" onClick={() => setIsAcceptedInvitation(false)}>
                            Cancel speaking
            </Button>
            <Button type="solid">
                            Enter event
            </Button>
          </React.Fragment>
        );
      } else if (!isAcceptedInvitation && eventType === "public") {
        return (
          <Button type="solid">Register as attendee</Button>
        );
      } else {
        return null;
      }
    };
    return (
      <div className={isAcceptedInvitation ? final_form_accept : final_form_decline}>
        <Text size={[6, 6, 5, 5, 5, 5, 4]} bold as="h3">
          {
            isAcceptedInvitation ?
              "You are now a speaker at this event!"
              :
              "You declined to speak at this event"
          }
        </Text>
        <Text
          size="m"
          className={eventType === "public" ||
                    isAcceptedInvitation ? description : ""}>
          {renderDescription()}
        </Text>
        <div className={isAcceptedInvitation ? acception_buttons : decline_buttons}>
          {renderButtons()}
        </div>
      </div>
    );
  };
  const renderAccordionOrText = () => {
    if (sessions.length > 1 && !isDesktop ) {
      return (
        <div className={accordion}>
          <Button
            endIcon={isSessionsVisible ? "ChevronUp" : "ChevronDown"}
            theme="violet"
            type="flat"
            onClick={() => setSessionsVisible(!isSessionsVisible)}>
            {isSessionsVisible ? "Hide my sessions" : "Show my sessions"}
          </Button>
        </div>
      );
    } else if (isDesktop) {
      return (
        <Text size="m" className={list_description}>
             Here is a list of the sessions you are invited to speak at:
        </Text>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={wrap}>
      {isAcceptedInvitation === null ?
        <React.Fragment>
          <Text size={[6, 6, 5, 5, 5, 5, 4]} bold as="h3">
                        You’re invited to be a speaker
          </Text>
          {renderAccordionOrText()}
          {isSessionsVisible &&
                <div className={sessions_section}>
                  <SessionsInvitationList sessions={sessions}/>
                </div>}
          <div className={buttons}>
            <Button type="outline" onClick={() => setIsAcceptedInvitation(false)}>
                            Decline
            </Button>
            <Button type="solid" onClick={() => setIsAcceptedInvitation(true)}>
                            Accept
            </Button>
          </div>
        </React.Fragment>
        :
        renderFinalNotification()
      }
    </div>
  );
};