import React, { Fragment } from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import PageSubHeader from './PageSubHeader';

const Feedback = ({ className, children, ...rest }) => (
  <>
    <Comment
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          As distributed technologies rapidly evolve, Consortia is the first full-stack platform that brings them together to power new trust systems.
          Blockchain is hard, but it doesn’t need to be. Kaleido harnesses a full range of blockchain technologies with “checkbox simplicity.”
          With enterprise in its DNA, Consortia offers a proven, globally available cloud infrastructure to meet the most rigorous requirements.
        </p>
      }
    />

    <Comment
      author={<a>Yoda</a>}
      avatar={
        <Avatar
          src="https://news.images.itv.com/image/file/159226/dbd162580cda702b_1360229793_9j-4aaqsk.jpeg"
          alt="Yoda"
        />
      }
      content={
        <p>
          Consortia connects brands and retailers to consumers, so that every shopping experience feels personal.
          From search and discovery to purchase and advocacy, Consortia solutions reach in-market shoppers, personalize their experiences and give them the confidence to buy.
          Each month in the Bazaarvoice Network—the world’s largest shopper network.
        </p>
      }
    />

    <Comment
      author={<a>Luke S.</a>}
      avatar={
        <Avatar
          src="http://i.imgur.com/xrlZoR6.png"
          alt="Luke S."
        />
      }
      content={
        <p>
          Consortia is the first unified customer experience management platform for the enterprise.
          It helps the world’s largest brands reach, engage, and listen to their customers on Facebook, Twitter, and 23+ other social channels
          for the purposes of marketing, advertising, research, care, and commerce.
        </p>
      }
    />
  </>
)


export default Feedback
