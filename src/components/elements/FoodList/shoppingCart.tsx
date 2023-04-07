import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Widget } from '@web3uikit/core';

function ReceiptGenerator({ restaurantName = '', orderItems = [{id: 0, name: '', price: 0, num: 0}], total = 0}) {
  const receiptRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState('');

  const handleGenerateReceipt = () => {
    if (receiptRef.current) {
      html2canvas(receiptRef.current).then((canvas) => {
        const image = canvas.toDataURL();
        setImage(image);
      });
    }
  };

  return (
    <div>
        <div ref={receiptRef}>
        <h2>{restaurantName}</h2>
        <br></br>
        <ul>
            {orderItems.map((item: {id: number, name: string, price: number, num: number}) => (
            <li key={item.id}>
                {item.name} - ${item.price} * {item.num}
            </li>
            ))}
        </ul>
        <p>Total: ${total = orderItems.reduce((acc, item) => acc + item.price* item.num, 0)}</p>
    </div>
      <button onClick={handleGenerateReceipt}>Generate Receipt</button>
      {image && <img src={image} height='400' width='50%' margin-left={100}/>}
    </div>
  );
}

export default ReceiptGenerator;



