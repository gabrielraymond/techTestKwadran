"use client";
import { createPosts } from "@/db/queries/postAnswer";
import { useState } from "react";

export default function Home() {
  // 1 membuat 5 input dan button submit , setelah submit maka akan keluar nilai maksimumnya.
  //2 mengurutkan dari bilangan terbesar ke terkecil
  //3 nomor 1 dan 2 disimpan pada database

  // krn@kwad5.com

  const [inputVal, setInputVal] = useState<any>([]);
  const [value, setValue] = useState(0);
  const [sortValue, setSortValue] = useState<any>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let value = 0;
    let arr = [];

    console.log(inputVal);

    for (let i = 0; i < inputVal.length; i++) {
      if (value < inputVal[i].value) {
        value = inputVal[i].value;
      } else {
        value;
      }
      arr.push(inputVal[i].value);
    }

    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    setValue(value);
    setSortValue(arr);

    createPosts({ title: "answer", maxValue: value, sortValue: arr });
  };
  return (
    <main className="  min-h-screen text-black">
      <h1>Technical Test</h1>
      {/* <div id="main">
        <Hero />
      </div> */}

      {/* <h1 className="mb-10">Test</h1>

      <div className="ml-20">
        <DatePicker />
      </div> */}
      {/* <Holywings /> */}
      {/* <Test2 /> */}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Input 1</label>
            <input
              name="input1"
              type="number"
              className="border ml-4"
              onChange={(e) =>
                setInputVal((prev: any) => [
                  ...prev.filter((item: any) => item.name !== "inp1"),
                  { name: "inp1", value: parseInt(e.target.value) },
                ])
              }
            />
          </div>
          <div>
            <label>Input 2</label>
            <input
              name="input2"
              type="number"
              className="border ml-4"
              onChange={(e) =>
                setInputVal((prev: any) => [
                  ...prev.filter((item: any) => item.name !== "inp2"),
                  { name: "inp2", value: parseInt(e.target.value) },
                ])
              }
            />
          </div>
          <div>
            <label>Input 3</label>
            <input
              name="input3"
              type="number"
              className="border ml-4"
              onChange={(e) =>
                setInputVal((prev: any) => [
                  ...prev.filter((item: any) => item.name !== "inp3"),
                  { name: "inp3", value: parseInt(e.target.value) },
                ])
              }
            />
          </div>
          <div>
            <label>Input 4</label>
            <input
              name="input4"
              type="number"
              className="border ml-4"
              onChange={(e) =>
                setInputVal((prev: any) => [
                  ...prev.filter((item: any) => item.name !== "inp4"),
                  { name: "inp4", value: parseInt(e.target.value) },
                ])
              }
            />
          </div>
          <div>
            <label>Input 5</label>
            <input
              name="input5"
              type="number"
              className="border ml-4"
              onChange={(e) =>
                setInputVal((prev: any) => [
                  ...prev.filter((item: any) => item.name !== "inp5"),
                  { name: "inp5", value: parseInt(e.target.value) },
                ])
              }
            />
          </div>

          <button className="py-2 px-4 bg-amber-400" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <p>hasil: {value}</p>
      </div>

      <h1>Mengurutkan bilangan terbesar ke terkecil</h1>
      <div>
        <p>hasil: {sortValue.map((num:any, idx:number) => <span>{num}{idx !== sortValue.length-1 ? ',': ''}</span>)}</p>
      </div>

      <h1>Menyimpan hasil ke table</h1>
    </main>
  );
}
