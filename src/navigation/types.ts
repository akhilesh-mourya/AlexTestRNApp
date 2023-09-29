import {InvoiceReport} from './../redux/finance/types';
import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  FinanceScreenKey,
  InvoiceType,
  ProgramScreenKey,
  ProgramType,
  TeamStackNavigationScreenKey,
  TeamScreenKey,
  TeamType,
  ChatScreenKey,
  CalendarScreenKey,
  SettingsScreenKey,
} from '../enums';
import {MyFacilityProgram, Program} from '../screens/program/types';
import {MyTeam, TeamProgram} from '../screens/team/types';
import {TeamMember} from '../redux/team/type';
import {EventDetail} from '../screens/calendar/calendarHelper';

export type RootStackParamList = {
  ForgotPasswordScreen: {email: string};
  VerifyEmailScreen: {email: string};
  CustomerDetailsScreen: {user: any};
};

export type ResetPasswordScreenRouteProps = RouteProp<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export type VerifyEmailScreenRouteProps = RouteProp<
  RootStackParamList,
  'VerifyEmailScreen'
>;

export type CustomerDetailsScreenRouteProps = RouteProp<
  RootStackParamList,
  'CustomerDetailsScreen'
>;

/* References
 ** https://reactnavigation.org/docs/typescript/
 */

export type NewProgramStackParamList = {
  NewProgramScreen: undefined;
  NewProgramDetailScreen: {
    programID: string | number;
    programType: ProgramType;
    facilityProgram: Program;
  };
  SelectMembersScreen: {
    programID?: string | number;
    divisionID?: string | number;
    programType: ProgramType;
    program: any;
    company_id?: number;
    division?: Program;
  };
  SelectPaymentMethodeScreen: {
    selectedMembers?: any[];
    programID?: string | number;
    divisionID?: string | number;
    programType: ProgramType;
    program: any;
    company_id?: number;
  };
  NewTeamDetailScreen: {
    programID: string | number;
    programType: ProgramType;
    facilityProgram: Program;
  };
  SelectTeamMembersScreen: {
    programID?: string | number;
    divisionID?: string | number;
    programType: ProgramType;
    program: any;
    company_id?: number;
  };
  TeamInviteRegistrationScreen: {
    programID: string | number;
    programType: ProgramType | TeamType;
    exclusiveInviteData: Program;
    isNewTeam?: boolean;
  };
  ReviewWaiversScreen: {
    programID: string | number;
    programType: ProgramType | TeamType;
    exclusiveInviteData: Program;
    isNewTeam?: boolean;
  };
};

export type NewProgramScreenProps = NativeStackNavigationProp<
  NewProgramStackParamList,
  ProgramScreenKey.NewProgramScreen
>;

export type NewProgramDetailScreenProps = NativeStackNavigationProp<
  NewProgramStackParamList,
  ProgramScreenKey.NewProgramDetailScreen,
  ProgramScreenKey.SelectMembersScreen
>;

export type NewProgramDetailScreenRouteProps = RouteProp<
  NewProgramStackParamList,
  ProgramScreenKey.NewProgramDetailScreen
>;

export type NewProgramMemberScreenRouteProps = RouteProp<
  NewProgramStackParamList,
  ProgramScreenKey.SelectMembersScreen
>;

export type MyProgramStackParamList = {
  MyProgramScreen: undefined;
  ProgramStandingAndGameScreen:
    | {
        myFacilityProgram: MyFacilityProgram | TeamProgram;
        standingType: string;
      }
    | undefined;
  Notifications: undefined;
};

export type ProgramStandingAndGameScreenProps = NativeStackNavigationProp<
  MyProgramStackParamList,
  ProgramScreenKey.ProgramStandingAndGameScreen
>;

export type ProgramStandingAndGameScreenRouteProps = RouteProp<
  MyProgramStackParamList,
  ProgramScreenKey.ProgramStandingAndGameScreen
>;

export type FinanceStackParamList = {
  InvoiceScreen: undefined;
  InvoiceReportScreen: {
    invoiceID: string | number;
    invoiceType: InvoiceType;
  };
  DelinquentPaymentScreen: {
    invoiceType: InvoiceType;
    invoiceReport: InvoiceReport;
  };
};

export type InvoiceScreenProps = NativeStackNavigationProp<
  FinanceStackParamList,
  FinanceScreenKey.InvoiceScreen
>;

export type InvoiceReportScreenProps = NativeStackNavigationProp<
  FinanceStackParamList,
  FinanceScreenKey.InvoiceReportScreen
>;

export type InvoiceReportScreenRouteProps = RouteProp<
  FinanceStackParamList,
  FinanceScreenKey.InvoiceReportScreen
>;

export type DelinquentPaymentScreenProps = NativeStackNavigationProp<
  FinanceStackParamList,
  FinanceScreenKey.DelinquentPaymentScreen
>;

export type DelinquentPaymentScreenRouteProps = RouteProp<
  FinanceStackParamList,
  FinanceScreenKey.DelinquentPaymentScreen
>;

export type MyTeamStackParamList = {
  MyTeamScreen: undefined;
  MyTeamRequestScreen: undefined;
  RosterScreen: {
    myTeam: MyTeam;
  };
  TeamMemberDetailScreen: {
    teamMember: TeamMember;
    myTeam: MyTeam;
  };
  TeamProgramScreen: {
    team_id: string | number;
  };
  SelectTeamMembersScreen: {
    myTeam: MyTeam;
  };
  SendEmailScreen: {
    selectedTeamMembers: TeamMember[];
    team_id: string | number;
  };
};

export type RoasterScreenProps = NativeStackNavigationProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.RosterScreen
>;

export type RosterScreenRouteProps = RouteProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.RosterScreen
>;

export type TeamMemberDetailScreenRouteProps = RouteProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.TeamMemberDetailScreen
>;

export type TeamProgramScreenProps = NativeStackNavigationProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.TeamProgramScreen
>;

export type TeamProgramScreenRouteProps = RouteProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.TeamProgramScreen
>;

export type SelectTeamMembersScreenRouteProps = RouteProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.SelectTeamMembersScreen
>;

export type SendEmailScreenRouteProps = RouteProp<
  MyTeamStackParamList,
  TeamStackNavigationScreenKey.SendEmailScreen
>;

export type NewTeamListScreenProps = NativeStackNavigationProp<
  NewProgramStackParamList,
  TeamScreenKey.NewTeamDetailScreen,
  TeamScreenKey.SelectTeamMembersScreen
>;

export type TeamInviteRegistrationScreenRouteProps = RouteProp<
  NewProgramStackParamList,
  TeamScreenKey.TeamInviteRegistrationScreen
>;

export type ChatStackParamList = {
  ChatConversationScreen: {
    chatData: any;
  };
  TeamDetailsScreen: {
    teamData: any;
  };
};

export type ChatConversationScreenProps = NativeStackNavigationProp<
  ChatStackParamList,
  ChatScreenKey.ChatConversationScreen
>;

export type TeamDetailScreenProps = NativeStackNavigationProp<
  ChatStackParamList,
  ChatScreenKey.TeamDetailsScreen
>;

export type TeamDetailScreenRouteProps = RouteProp<
  ChatStackParamList,
  ChatScreenKey.TeamDetailsScreen
>;

export type CalendarStackParamList = {
  DayCalendarScreen: undefined;
  WeekCalendar: undefined;
  CalendarEventDetailScreen: {
    calendarEvent: EventDetail;
  };
  CalendarEventRequestScreen: undefined;
  CalendarEventRequestStack: undefined;
};

export type DayCalendarScreenProps = NativeStackNavigationProp<
  CalendarStackParamList,
  CalendarScreenKey.DayCalendarScreen
>;
export type WeekCalendarScreenProps = NativeStackNavigationProp<
  CalendarStackParamList,
  CalendarScreenKey.WeekCalendar
>;
export type CalendarEventDetailScreenProps = NativeStackNavigationProp<
  CalendarStackParamList,
  CalendarScreenKey.CalendarEventDetailScreen
>;

export type CalendarEventDetailScreenRouteProps = RouteProp<
  CalendarStackParamList,
  CalendarScreenKey.CalendarEventDetailScreen
>;

export type CalendarEventRequestScreenProps = NativeStackNavigationProp<
  CalendarStackParamList,
  CalendarScreenKey.CalendarEventRequestScreen
>;

export type AccountSettingStackParamList = {
  AccountDelete: undefined;
  AccountDetailBeforeDelete: undefined;
  AccountDeleteFeedback: undefined;
  AccountDeleteSuccess: undefined;
  WebViewScreen: {url: string} | undefined;
};

export type AccountDeleteScreenProps = NativeStackNavigationProp<
  AccountSettingStackParamList,
  SettingsScreenKey.AccountDelete
>;

export type AccountDetailBeforeDeleteScreenProps = NativeStackNavigationProp<
  AccountSettingStackParamList,
  SettingsScreenKey.AccountDetailBeforeDelete
>;

export type AccountDeleteFeedbackScreenProps = NativeStackNavigationProp<
  AccountSettingStackParamList,
  SettingsScreenKey.AccountDeleteFeedback
>;

export type AccountDeleteSuccessScreenProps = NativeStackNavigationProp<
  AccountSettingStackParamList,
  SettingsScreenKey.AccountDeleteSuccess
>;
