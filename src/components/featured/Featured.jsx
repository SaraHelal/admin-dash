import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total revenue</h1>
            <MoreVertIcon className='icon' fontSize='small' />

        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value="75" text="75%" strokeWidth="5" />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">Previous transactions processing. Last payments may not be included.</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize='small' />
                <span className="resultAmount">$12.04K</span>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last week</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize='small' />
                <span className="resultAmount">$12.04K</span>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize='small' />
                <span className="resultAmount">$12.04K</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured