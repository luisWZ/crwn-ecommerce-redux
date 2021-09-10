import { connect } from 'react-redux';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => (
  // console.log(collection) || (
  <div className="collection">
    <h2 className="collection__title">{collection.title}</h2>
    <div className="collection__items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} {...{ item }} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);