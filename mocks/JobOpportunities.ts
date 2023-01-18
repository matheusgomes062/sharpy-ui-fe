interface JobOpportunityCardProps {
  /**
   * Title of the vacancy
   */
  title: string;
  /**
   * Country of job
   */
  country: string;
  /**
   * Modality of job
   */
  modality: 'Remoto' | 'Presencial' | 'Híbrido';
}

const MockJobOpportunities: JobOpportunityCardProps[] = [
  {
    title: 'Desenvolvedor(a) de aplicações Frontend',
    country: 'Brasil',
    modality: "Remoto"
  },
  {
    title: 'Desenvolvedor(a) de aplicações FullStack',
    country: 'Brasil',
    modality: "Remoto"
  },
  {
    title: 'Gerente de Produto',
    country: 'Brasil',
    modality: "Remoto"
  },
  {
    title: 'Analista de dados',
    country: 'Brasil',
    modality: "Remoto"
  },
  {
    title: 'Desenvolvedor(a) de aplicações FullStack',
    country: 'Brasil',
    modality: "Remoto"
  }
]

export default MockJobOpportunities;