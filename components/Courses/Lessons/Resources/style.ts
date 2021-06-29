import styled from "styled-components";
import { colors, displayFlex } from "../../../../assets/helpers/sc-helpers";

export const TextContent = styled.div`
  text-align: left;
  img {
    width: 100%;
    margin: 20px 0;
  }
  p {
    margin: 5px 0;
  }
  .resource-content {
    margin-bottom: 30px;
  }
  .edit-mode-btns {
    margin-bottom: 20px;
  }
`;
export const DocsContent = styled.div`
  iframe {
    width: 100%;
    height: 100vh;
    border: 1px solid ${colors.borderColor};
  }
`;
export const VideoConferenceContent = styled.div`
  a {
    color: ${colors.activeColor};
  }
  .description {
    margin-bottom: 20px;
  }
  .dt-wrapper {
    font-size: 17px;
    margin-bottom: 5px;
    ${displayFlex};
  }
  .dt-wrapper.edit-mode {
    justify-content: space-between;
  }
  .dt-wrapper input {
    width: 50%;
  }
  .dt-wrapper .date-time {
    font-size: 20px;
    margin-left: 30px;
  }
`;
export const TestResourceContent = styled.form`
  .question {
    margin-top: 0px;
    margin-bottom: 10px;
    vertical-align: middle;
  }
  .question-action {
    cursor: pointer;
    margin-left: 10px;
    display: none;
  }
  .quiz-item:hover .question-action {
    display: inline;
  }
  .question-action.edit {
    color: ${colors.activeColor};
  }
  .question-action.delete {
    color: ${colors.orange};
  }
  .variants {
    padding: 0 10px;
    margin-bottom: 20px;
  }
  .variant {
    ${displayFlex};
    margin-bottom: 5px;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    :hover {
      background-color: ${colors.lightGray};
    }
  }
  .variant.edit-mode-variant {
  }
  .variant.correct {
    background-color: ${colors.transparentActiveColor};
  }
  .variant.wrong {
    background-color: ${colors.transparentRed};
  }
  .variant input {
    margin-right: 5px;
  }
  .variant .edit-mode-variant-fg {
    margin-bottom: 0;
    margin-left: 20px;
  }
  .test-btns button {
    font-size: 17px;
    padding: 10px 20px;
  }
  .edit-test-modal {
    width: 50%;
  }
  .answer-content {
    margin-left: 20px;
  }
`;
export const SelectedQuizWrapper = styled.div`
  padding: 10px;
`;
export const AudioContent = styled.div`
  .audio-player {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid ${colors.borderColor};
  }
`;
export const SelectedFileName = styled.div`
  ${displayFlex};
  justify-content: space-between;
  background-color: ${colors.lightGray};
  padding: 10px 20px;
  .times {
    cursor: pointer;
  }
`;
export const VideoContent = styled.div`
  .video-player {
    padding: 5px;
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
  }
`;
