export default interface IJobOpportunityCardProps {
  /**
   * Id of the job
   */
  id: number;
  /**
   * Title of the vacancy
   */
  jobOpportunityCardTitle: string;
  /**
   * Country of job
   */
  country: string;
  /**
   * Modality of job
   */
  modality: "Remoto" | "Presencial" | "Híbrido";
}