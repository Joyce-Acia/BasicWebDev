﻿# BasicWebDev
<!DOCTYPE html>

<html>
    <head>
        <title>Gym Member</title>
    </head>
    <body>
        <h1>Form Pendaftaran Member Gym</h1>
        <form action="simpan.php">
            Nama Lengkap: <br>
            <input type="text" name="nama_lengkap" size="40" maxlength="20" required>
            <br><br>

            Jenis Kelamin: <br>
            <input type="radio" name="jenis_kelamin" value="L" checked> Laki-laki
            <input type="radio" name="jenis_kelamin" value="P"> Perempuan
            <br><br>

            Tanggal Lahir: <br>
            <input type="date" value="tanggal_lahir">
            <br><br>

            Alamat: <br>
            <input type="text" name="alamat" size="50" placeholder="Isikan sesuai KTP">
            <br><br>

            Email: <br>
            <input type="text" name="email" size="30">
            <br><br>

            Password: <br>
            <input type="password" name="pass">
            <br><br>

            Media Sosial: <br>
            <input type="checkbox" name="instagram" value="ya"> Instagram
            <input type="checkbox" name="tiktok" value="ya"> TikTok
            <input type="checkbox" name="twitter" value="ya"> Twitter
            <input type="checkbox" name="facebook" value="ya"> Facebook
            <input type="checkbox" name="youtube" value="ya"> Youtube
            <br><br>

            Mengetahui gym ini dari: <br>
            <select name="info">
                <option selected="select">-=Pilih=-</option>
                <option value="website">Website</option>
                <option value="medsos">Media Sosial</option>
                <option value="teman">Teman</option>
                <option value="brosur">Brosur</option>
            </select>
            <br><br>

            Alasan mendaftar di gym ini: <br>
            <textarea name="alasan" cols="40" rows="5"></textarea>
            <br><br>

            Paket Membership: <br>
            <input type="radio" name="paket" value="3bulan"> 3 bulan (Rp900.000)
            <input type="radio" name="paket" value="6bulan"> 6 bulan (Rp1.500.000)
            <input type="radio" name="paket" value="12bulan"> 12 bulan (Rp2.400.000)
            <br><br>

            Upload Bukti Pembayaran <b>(Binance Wallet: lagikosong00000)</b> <br>
            <input type="file">
            <br><br>

            <input type="submit" value="Kirim">
            <input type="reset" value="Batal">
        </form>
    </body>
</html>
