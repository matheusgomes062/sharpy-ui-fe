import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const software_engineer = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      role: "Banco de Talentos",
      modality: "Remoto",
      journey: "Tempo Integral",
      country: "Brazil",
      description:
        "## Descrição da vaga\n\nEstamos em busca de profissionais com experiência em desenvolvimento de softwares, para atuarem em projetos desafiadores e inovadores. O candidato ideal deve ter conhecimento em:\n\n- Linguagens de programação, tais como Java, Python, Ruby, entre outras;\n- Bancos de dados SQL e NoSQL;\n- Frameworks, tais como Spring, Django, Ruby on Rails, entre outros.\n\nAlém disso, buscamos por pessoas proativas, com vontade de aprender e se desenvolver profissionalmente, que saibam trabalhar em equipe e possuam boa comunicação.\n\n### Requisitos\n\n- Formação superior em áreas relacionadas a tecnologia da informação ou experiência equivalente;\n- Experiência prévia em desenvolvimento de softwares.\n\n### Benefícios\n\n- Salário compatível com o mercado;\n- Plano de saúde;\n- Vale-refeição;\n- Ambiente de trabalho descontraído e inovador;\n- Oportunidades de crescimento profissional.\n\n### Como se candidatar\n\nPara fazer parte do nosso banco de talentos, clique em APLICAR e preencha as informações no formulário. Seu currículo ficara conosco e entraremos em contato quando novas vagas que se encaixe no seu perfil.\n\nAgradecemos o seu interesse em fazer parte da nossa equipe!",
      area: "IT",
      prospects: {
        create: [
          {
            email: "matheusgomes062@gmail.com",
            name: "Matheus",
            surname: "Gomes",
            cv: "test.url",
            coverLetter: "none",
            acceptedPrivacyPolitics: true,
          },
          {
            email: "rambo@gmail.com",
            name: "Jhonatan",
            surname: "Rambo",
            cv: "test.url",
            coverLetter: "test",
            acceptedPrivacyPolitics: true,
          },
          {
            email: "siqueira@gmail.com",
            name: "Mateus",
            surname: "Siqueira",
            cv: "test.url",
            coverLetter: "test",
            acceptedPrivacyPolitics: true,
          },
        ],
      },
    },
  });
  console.log({ software_engineer })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })