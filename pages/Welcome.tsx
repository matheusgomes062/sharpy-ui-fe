import Carousel from "@/components/Carousel";
import StatisticBlock from "@/components/StatisticBlock";
import AboutUs from "@/components/AboutUs";
import SolutionsSection from "@/components/SolutionsSection";
import CareersSection from "@/components/CareersSection";
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
        hasIcon={true}
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
        mode="dark"
        primary={true}
        label="Ver Mais"
      />
    </Layout>
  );
}
