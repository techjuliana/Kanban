import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <main>
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_M5PJHFF7vA.json"
        className="player"
        loop
        autoplay
        style={{ height: "300px", width: "300px" }}
      />
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.ATIVIDADES} />
            <Column column={ColumnType.EM_ANDAMENTO} />
            <Column column={ColumnType.BLOQUEADO} />
            <Column column={ColumnType.CONCLUIDO} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
