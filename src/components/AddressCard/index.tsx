import './index.css';

interface IAddressCard {
  place: string;
}

const AddressCard = (props: IAddressCard) => {
  return (
    <div className="address__card">
      <small>Onde nos encontrar</small>
      <h3>Endereço</h3>
      <p className="Rua">{props.place}</p>
      <div className="address__info">
        Segunda a sexta, das 7h30min às 12h/ das 14h às 17h30min Sábado, das 8h
        às 12h
      </div>
    </div>
  );
};

export default AddressCard;
