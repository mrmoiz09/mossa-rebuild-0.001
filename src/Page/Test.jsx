import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Test = () => {

    const data = {title1:"title1",title2:"This is my title2",okay:"This is my title3"}

  return (
    <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>

    <TabList>

        {Object.keys(data).map((obj,i)=>(
            <Tab>{data[obj]}</Tab>
        ))}

      {/* <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab> */}
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
  )
}

export default Test