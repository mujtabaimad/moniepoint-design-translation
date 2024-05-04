import { FC } from "react";

import RecentTransactionsRow from "./recent-transactions-row/recent-transactions-row";

import "./recent-transactions.scss";
import {
  DropboxLogo,
  RecentTransactionIcon,
  SpotifyLogo,
  StripeLogo,
  ZendeskLogo,
} from "../../../assets/images/images";

const RecentTransactions: FC = () => {
  return (
    <div className="recent-transactions">
      <div className="recent-transactions-header-wrapper">
        <div className="recent-transactions-header">
          <img
            src={RecentTransactionIcon}
            alt="recent transaction"
            className="recent-transaction-icon"
          />
          <p className="recent-transactions-label">Recent Transactions</p>
          <p className="recent-transactions-subtext">Last 4 activities</p>
        </div>
        <button className="recent-transactions-see-all-btn">See All</button>
      </div>
      <div className="recent-transactions-table">
        <RecentTransactionsRow
          logo={StripeLogo}
          companyName="Stripe"
          timestamp="Wed, 16 Feb, 18:11"
          tag="Business"
          amount={1223}
        />
        <RecentTransactionsRow
          logo={DropboxLogo}
          companyName="Dropbox"
          timestamp="Tue, 15 Feb, 14:24"
          tag="Equipment"
          amount={-200}
        />
        <RecentTransactionsRow
          logo={ZendeskLogo}
          companyName="Zendesk"
          timestamp="Wed, 16 Feb, 18:11"
          tag="Marketing"
          amount={-1223.18}
        />
        <RecentTransactionsRow
          logo={SpotifyLogo}
          companyName="Spotify"
          timestamp="Mon, 14 Feb, 16:40"
          tag="Entertainment"
          amount={-19}
        />
      </div>
    </div>
  );
};

export default RecentTransactions;
