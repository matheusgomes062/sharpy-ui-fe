import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import OurTeam from "@/components/OurTeam";

export default function AboutUs() {
  return (
    <Layout>
      <div
        className={`w-screen md:h-[470px] h-56 bg-[url('/carousel_img_3.jpg')] bg-no-repeat bg-center bg-cover md:bg-fixed`}
      />
      <div id="about-us" className="flex justify-center md:my-28 my-9">
        <div className="w-full max-w-6xl p-4">
          <SectionTitle
            mode="dark"
            sectionTitle="Quem Somos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod in at eros, aliquam quis ornare faucibus. Metus volutpat, semper et sit volutpat iaculis.
Non, penatibus quis eros cursus sit diam facilisi pellentesque. Vitae pharetra est nulla laoreet. Diam diam pulvinar ornare felis, dignissim praesent interdum. 
Mattis vel lacus faucibus lorem semper egestas pulvinar magnis facilisis. Diam dolor lacus hendrerit in arcu."
          />
        </div>
      </div>
      <div id="our-team">
        <OurTeam
          fontStyle="font-bold md:text-sm"
          genericTitle="Nosso Time"
          hasIcon={false}
          ourTeam={[
            {
              name: "Mateus Siqueira Carneiro",
              position: "Backend Developer",
              src: "bg-[url('/siqueirao.jpeg')]",
            },
            {
              name: "Matheus Gomes de Paula",
              position: "Frontend Developer",
              src: "bg-[url('/gomes.jpg')]",
            },
            {
              name: "Jhonatan Lourenço Rambo",
              position: "Frontend Developer",
              src: "bg-[url('/rambo.jpeg')] ",
            },
          ]}
        />
      </div>
    </Layout>
  );
}
