import React, { useEffect, useState } from "react";

export const TestContext = React.createContext();

const TestProvider = ({ children }) => {
  const [testInfo, setTestInfo] = useState({
    testDefinition: {
      basicInfo: {
        name: null,
        date: null,
        papersNumber: null,
      },
      selectedGrades: null,
      testSettingInfo: {
        hasnegativescore: false,
        SeeQuestionsAnswersheet: false,
        participantsNumbers: false,
      },
    },
    questionBooksInfo: null,
    answerSheetInfo: null,
    invitedStudentPhoneNumbers: null,
    testType: null,
  });
  function setTestDefinitionInfo(basicInfo, selectedGrades, testSettingInfo) {
    setTestInfo({
      ...testInfo,
      testDefinition: {
        basicInfo: {
          name: basicInfo.name,
          date: basicInfo.date,
          papersNumber: basicInfo.papersNum,
        },
        selectedGrades: selectedGrades,
        testSettingInfo: {
          hasnegativescore: testSettingInfo.hasnegativescore,
          SeeQuestionsAnswersheet: testSettingInfo.SeeQuestionsAnswersheet,
          participantsNumbers: testSettingInfo.participantsNumbers,
        },
      },
    });
  }

  return (
    <TestContext.Provider
      value={{
        testInfo,
        setTestDefinitionInfo,
        setTestInfo,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
export default TestProvider;
