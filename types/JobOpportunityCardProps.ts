export default interface IJobOpportunityCardProps {
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