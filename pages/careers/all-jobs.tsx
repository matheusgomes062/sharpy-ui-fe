import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/all-jobs-page.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <div className="flex justify-center md:my-28 my-9">
        <div className="w-full max-w-6xl p-4">
          <SectionTitle
            mode="dark"
            sectionTitle="Carreiras"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in at eros, aliquam quis ornare faucibus. Metus volutpat, semper et sit volutpat iaculis.
Non, penatibus quis eros cursus sit diam facilisi pellentesque. Vitae pharetra est nulla laoreet. Diam diam pulvinar ornare felis, dignissim praesent interdum. 
Mattis vel lacus faucibus lorem semper egestas pulvinar magnis facilisis. Diam dolor lacus hendrerit in arcu."
          />
        </div>
      </div>
      <Careers
        dropDownPlaceholder="Filtrar por Área"
        inputPlaceholder="Buscar Oportunidade"
      />
    </Layout>
  );
}
