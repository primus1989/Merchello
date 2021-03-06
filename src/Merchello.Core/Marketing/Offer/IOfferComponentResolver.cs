﻿namespace Merchello.Core.Marketing.Offer
{
    using System;
    using System.Collections.Generic;

    using Lucene.Net.Search.Function;

    using Merchello.Core.Marketing.Discounts;
    using Merchello.Core.Marketing.Discounts.Constraints;

    /// <summary>
    /// Defines the OfferComponentResolver.
    /// </summary>
    internal interface IOfferComponentResolver
    {
        /// <summary>
        /// Gets the resolved type by component key.
        /// </summary>
        /// <param name="key">
        /// The key.
        /// </param>
        /// <returns>
        /// The <see cref="Type"/> of component.
        /// </returns>
        Type GetTypeByComponentKey(Guid key);

        /// <summary>
        /// Gets a <see cref="IDiscountConstraint"/> by it's key.
        /// </summary>
        /// <typeparam name="T">
        /// The type of discount constraint to return
        /// </typeparam>
        /// <param name="definition">
        /// The <see cref="OfferComponentDefinition"/>.
        /// </param>
        /// <returns>
        /// The <see cref="IDiscountConstraint"/>.
        /// </returns>
        T GetComponent<T>(OfferComponentDefinition definition) where T : OfferComponentBase;

        /// <summary>
        /// Returns a collection of all resolved <see cref="IDiscountConstraint"/> given a collection of definition.
        /// </summary>
        /// <param name="definitions">
        /// The definition.
        /// </param>
        /// <returns>
        /// The <see cref="IEnumerable{IDiscountConstraint}"/>.
        /// </returns>
        IEnumerable<OfferComponentBase> GetComponents(IEnumerable<OfferComponentDefinition> definitions);            
    }
}