'use client'

import { ProductFeature } from "Types";

type Features = {
    features: ProductFeature[];
}

export const SimpleProduct = ({ features }: Features) => {
    return (
        <div className="flex flex-col gap-6">
            {features && features.map((feature) => (
                <div key={feature.feature_title} className="flex flex-col">
                    <h4 className="font-bold">{feature.feature_title}</h4>
                    <div className="flex flex-row gap-4">
                        {feature.feature_value.split(',').map((value, index) => (
                            <span key={index}>{value.trim()}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
