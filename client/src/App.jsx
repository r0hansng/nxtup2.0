import Button from './components/ui/Button/Button';
import DropDown from './components/ui/DropDown/DropDown';
import Input from './components/ui/Input/Input';
import TextArea from './components/ui/TextArea/TextArea';

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className=' w-[448px] flex flex-col gap-4' >
        <Input type="text" title="Email Address" placeholder="" />
        <Button variant="filled" size="xl">
          Click Me
        </Button>
        <Input type="checkbox" variant="checkbox" title="click" />
        <Input type="radio" variant="radio" title="radio" />
        <TextArea />

        <DropDown options={[{id:1,value:"one"},{id:2,value:"two"},{id:3,value:"three"},{id:4,value:"four"}]}/>
      </div>
    </div>
  );
};

export default App;
