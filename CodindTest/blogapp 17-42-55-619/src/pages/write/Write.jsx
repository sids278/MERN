// import { useContext, useState } from "react";
// import "./write.css";
import axios from "axios";
// import { Context } from "../../context/Context";
import { Button, Checkbox, Form, Input } from 'antd';

// export default function Write() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (values) => {
   
//     const newPost = {
//       username: 'sid',
//       values.title,
//       values.desc,
//     };
    
//     try {
//       const res = await axios.post("/posts", newPost);
//       window.location.replace("/post/" + res.data._id);
//     } catch (err) {}
//   };
//   return (
//     <div className="write">
//       {file && (
//         <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
//       )}
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//             onChange={e=>setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             placeholder="Tell your story..."
//             type="text"
//             className="writeInput writeText"
//             onChange={e=>setDesc(e.target.value)}
//           ></textarea>
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
const onFinish = async(values) => {
   
    const newPost = {
              username: 'sid',
              title:values.title,
              desc:values.desc,
    };
    try {
              const res = await axios.post("/posts", newPost);
              window.location.replace("/post/" + res.data._id);
            }catch (err) {}
    console.log('Success:', values.title);
    
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="desc"
      name="desc"
      rules={[
        {
          required: true,
          message: 'Please input your desc!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;