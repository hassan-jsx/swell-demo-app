export const config: SwellConfig = {
    description: '',
    model: {
        events: ['product.created'],
    },
};

export default async function (req: SwellRequest) {
    const { swell, store, settings, data } = req;
    return await swell.post(`/demo`, {
        name: data.name,
        slug: data.slug,
        price: data.price,
    });
}
