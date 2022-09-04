/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

console.log("Tüm klasörler :", folders);

/*----------------------------------------*/
const removeFolder = (folderId) => {
  console.log("Klasör silme işlemi");
  console.log("Silinmesini istediğimiz klasör :", folders[1]);
  console.log(
    "Kalan klasörler :",
    folders.filter((folder) => folder.id !== folderId)
  );
};
removeFolder(6);

/*------------------------------------------*/

const remove = (fileId) => {
  let file;
  folders.forEach((folder) => {
    if (folder.files) {
      // console.log(
      //   "Folders array içinde bulunan files arrayleri : ",
      //   folder.files
      // );
      file = folder.files.find((index) => index.id !== fileId);
      //console.log(file);
      if (file) {
        console.log(
          "Silinmesini istediğimiz files :",
          (folder.files = folder.files.filter((index) => index.id !== file.id))
        );
      }
    }
  });
};
console.log("folders içindeki files dosyası silme");
remove(17);
console.log("Folders array son hali :", folders);

/*-------------------------------------------*/

const move = (fileId, folderId) => {
  let file = remove(fileId);
  const folder = folders.find((folder) => folder.id === folderId);
  if (folder && folder.files) {
    folder.files = [...folder.files, file];
  } else {
    folder.files = [folder];
  }
  console.log(folder);
};
console.log("Dosya taşıma işlemi");
move(17, 6);
console.log("Folders array son hali :", folders);

/*-------------------------------------------*/

const copy = (fileId, folderId) => {
  let file;
  folders.forEach((folder) => {
    //console.log(folder);
    if (folder.files) {
      const copyFolder = folder.files.find((item) => item.id === fileId);
      if (copyFolder) file = copyFolder;
    }
  });
  const folder = folders.find((item) => item.id === folderId);
  if (folder && folder.files) {
    folder.files = [...folder.files, file];
  } else {
    folder.files = [file];
  }
  console.log(
    "18 numaralı dosyanın 7 numaraalı ana dizine kopyalanmış hali :",
    folder
  );
};
console.log("Kopyalama işlemi");
copy(18, 7);
console.log("Folders array son hali :", folders);

/*----------------------------------------*/

const parentFolderOf = (fileId) => {
  const folderId = folders.findIndex((folder) => {
    if (folder && folder.files) {
      if (folder.files.find((file) => file.id === fileId)) {
        return true;
      }
    }
    return false;
  });
  console.log(
    "17.numaralı dosyanın bulunduğu ana dizin :",
    folders[folderId].id
  );
};
console.log("Ana dizin bulma işlemi");
parentFolderOf(17);

/*
move(17, 6); // dosyayı klasöre taşıyacak
copy(18, 7); // kopyasını oluşturacak
remove(17); // dosyayı silecek
removeFolder(6); //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17); // ==> 5
*/
