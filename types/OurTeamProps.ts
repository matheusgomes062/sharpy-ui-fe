import IGenericTitle from "./GenericTitle";

export default interface IOurTeamProps extends IGenericTitle {
  ourTeam: Array<{
    src: string;
    name: string;
    position: string;
  }>;
}
