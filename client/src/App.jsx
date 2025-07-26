import Button from './components/ui/Button/Button';
import DropDown from './components/ui/DropDown/DropDown';
import Input from './components/ui/Input/Input';
import TextArea from './components/ui/TextArea/TextArea';

const options1 = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' }
];

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className=" w-[448px] flex flex-col gap-4">
        <Input type="text" title="Email Address" placeholder="" />
        <Button variant="filled" size="xl">
          Click Me
        </Button>
        <Button variant="" size="xl">
          Click Me
        </Button>
        <Button variant="icon" size="xl">
          Click Me
        </Button>
        <Input type="checkbox" variant="checkbox" title="click" />
        <Input type="radio" variant="radio" title="radio" />
        <TextArea />

        <DropDown options={options1} />
      </div>
    </div>
  );
};

export default App;
