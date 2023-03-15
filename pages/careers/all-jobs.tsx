import Layout from "@/components/Layout";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <Layout>
      <Careers
        dropDownPlaceholder="Filtrar por Área"
        inputPlaceholder="Buscar Oportunidade"
        jobOpportunities={[
          {
            jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações Frontend",
            country: "Brasil",
            modality: "Remoto",
          },
          {
            jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
            country: "Brasil",
            modality: "Remoto",
          },
          {
            jobOpportunityCardTitle: "Gerente de Produto",
            country: "Brasil",
            modality: "Remoto",
          },
          {
            jobOpportunityCardTitle: "Analista de dados",
            country: "Brasil",
            modality: "Remoto",
          },
          {
            jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
            country: "Brasil",
            modality: "Remoto",
          },
        ]}
      />
    </Layout>
  );
}
