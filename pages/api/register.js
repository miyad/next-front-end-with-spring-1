export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}

export default function register(req, res){
    console.log(req.body);
    console.log("inside register api")
    const { username, password, email } = req.body;
    res.status(200).json({
        message: 'User registered successfully!',
        user: {
            username,
            email,
            password
        }
    });

}