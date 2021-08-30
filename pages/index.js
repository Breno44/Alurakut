import styled from "styled-components";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;
const Box = styled.h1`
  background: #fff;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <main>
      <Box>imagens</Box>
      <Box>Bem vindo</Box>
      <Box>comunidades</Box>
    </main>
  );
}
