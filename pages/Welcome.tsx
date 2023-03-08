import Carousel from "@/components/Carousel";
import StatisticBlock from "@/components/StatisticBlock";
import AboutUs from "@/components/AboutUs";
import SolutionsSection from "@/components/SolutionsSection";
import CareersSection from "@/components/CareersSection";
import ContactUs from "@/components/ContactUs";
import Layout from "@/components/Layout";

export default function Welcome() {
  return (
    <Layout>
      <Carousel label="Conheça a Sharpy" primary={false} />
      <StatisticBlock
        statistic={[
          [78, "Lorem ipsum"],
          [91, "Lorem ipsum"],
          [57, "Lorem ipsum"],
        ]}
      />
      <AboutUs
        sectionTitle="Quem Somos"
        mode="dark"
        primary={true}
        label="Saiba Mais"
        genericTitle="Nosso Time"
        shortDescription="Somos uma Software House com propósitos que vão além da tecnologia."
      />
      <SolutionsSection
        sectionTitle="Soluções"
        description="A Sharpy acredita que a tecnologia é uma ferramenta de melhoria contínua na vida e na rotina de pessoas e empresas."
        mode="light"
        solutions={[
          {
            icon: "Devices",
            title: "Aplicações personalizadas",
            solutionsCardDescription:
              "Nesta solução, cuidamos de todo processo de desenvolvimento de soluções.",
          },
          {
            icon: "Integration",
            title: "Consultoria em desenvolvimento",
            solutionsCardDescription:
              "Nesse modelo alocamos consultores sharpy dentro do seu negócio.",
          },
          {
            icon: "Screenshot",
            title: "Soluções Sharpy",
            solutionsCardDescription:
              "Nesta opção teremos soluções comuns a pronta entrega.",
          },
        ]}
      />
      <CareersSection
        sectionTitle="Carreiras"
        description="Somos uma Software House com propósitos que vão além da tecnologia. Por isso, nosso time é multidisciplinar."
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
        mode="dark"
        primary={true}
        label="Ver Mais"
      />
      <ContactUs
        title="Fale Conosco"
        description="Formas de entrar em contato conosco"
        email="teste@sharpy.com"
        phone="+55 11 9876-5555"
        address="Rua Foz de São José, 99, BR"
      />
    </Layout>
  );
}
