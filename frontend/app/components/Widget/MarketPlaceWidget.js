import React, { useState } from 'react';
import binanceLogo from 'enl-images/crypto/binance.png';
import bitcoinLogo from 'enl-images/crypto/bitcoin.png';
import bytecoinLogo from 'enl-images/crypto/bytecoin.png';
import cardanoLogo from 'enl-images/crypto/cardano.png';
import decredLogo from 'enl-images/crypto/decred.png';
import iconLogo from 'enl-images/crypto/icon.png';
import iotaLogo from 'enl-images/crypto/iota.png';
import litecoinLogo from 'enl-images/crypto/litecoin.png';
import moneroLogo from 'enl-images/crypto/monero.png';
import nanoLogo from 'enl-images/crypto/nano.png';
import nemLogo from 'enl-images/crypto/nem.png';
import papulousLogo from 'enl-images/crypto/papulous.png';
import rippleLogo from 'enl-images/crypto/ripple.png';
import stellarLogo from 'enl-images/crypto/stellar.png';
import stratisLogo from 'enl-images/crypto/stratis.png';
import tronLogo from 'enl-images/crypto/tron.png';
import TradingTable from '../Tables/TradingTable';
let counter = 0;
function createData(logo, market, name, price, change, position, stats, volume, balance) {
  counter += 1;
  return {
    id: counter,
    logo,
    market,
    name,
    price,
    change,
    position,
    stats,
    volume,
    balance
  };
}

function MarketPlaceWidget() {
  const [order] = useState('asc');
  const [orderBy] = useState('market');
  const [columnData] = useState([
    {
      id: 'market',
      numeric: false,
      disablePadding: true,
      label: 'Market USD'
    }, {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Price (USD)'
    }, {
      id: 'change',
      numeric: true,
      disablePadding: false,
      label: 'Change (%)'
    }, {
      id: 'stats',
      numeric: false,
      disablePadding: false,
      label: '12H Stats'
    }, {
      id: 'volume',
      numeric: true,
      disablePadding: false,
      label: 'Volume (mn USD)'
    }, {
      id: 'balance',
      numeric: true,
      disablePadding: false,
      label: 'Balance (USD)'
    },
  ]);
  const [data] = useState([
    createData(binanceLogo, 'BNB', 'Binance', 2.5, 4.3, 'up', 'ltc', 341, 0),
    createData(bitcoinLogo, 'BTC', 'Bitcoin', 7345, 1.3, 'down', 'btc', 12, 0.72),
    createData(bytecoinLogo, 'BCN', 'Bytecoin', 320, 10, 'down', 'xlm', 110, 0),
    createData(cardanoLogo, 'ADA', 'Cardano', 194, 17, 'down', 'ada', 23, 0),
    createData(decredLogo, 'DCR', 'Decred', 2.7, 2.6, 'up', 'xrp', 9, 0),
    createData(iconLogo, 'ICX', 'Iconic', 192, 9.3, 'up', 'xlm', 14, 0),
    createData(iotaLogo, 'IOTA', 'Iota', 77.2, 2.1, 'down', 'ltc', 221, 10.55),
    createData(litecoinLogo, 'LTC', 'Litecoin', 90.4, 43, 'up', 'ada', 14, 0),
    createData(moneroLogo, 'XMR', 'Monero', 2.1, 9, 'up', 'btc', 20, 0),
    createData(nanoLogo, 'NANO', 'Nano Coin', 4.8, 89, 'stay', 'ltc', 19, 0),
    createData(nemLogo, 'NEM', 'Nem', 92, 27, 'up', 'xrp', 273, 720),
    createData(papulousLogo, 'PPT', 'Papulous', 2300, 5.7, 'stay', 'ltc', 442, 0),
    createData(rippleLogo, 'XRP', 'Ripple', 86, 22.9, 'up', 'xlm', 35.2, 88.98),
    createData(stellarLogo, 'XLM', 'Stellar Lumens', 11.5, 2.1, 'up', 'btc', 45, 19.23),
    createData(stratisLogo, 'STRAT', 'Stratis', 14.7, 11.9, 'up', 'ltc', 17.7, 0),
    createData(tronLogo, 'TRX', 'Tron', 201, 27.2, 'down', 'xrp', 98, 103),
  ].sort((a, b) => (a.price < b.price ? -1 : 1)));
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);
  const [defaultPerPage] = useState(5);
  const [filterText] = useState('');

  return (
    <TradingTable
      order={order}
      orderBy={orderBy}
      data={data}
      page={page}
      rowsPerPage={rowsPerPage}
      defaultPerPage={defaultPerPage}
      filterText={filterText}
      columnData={columnData}
    />
  );
}

export default MarketPlaceWidget;
